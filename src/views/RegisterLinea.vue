<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Registro APP Linea 2</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <form action="" @submit.prevent="registerValidation">
        <ion-grid>
          <ion-row>
            <ion-col size="12">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    <ion-list>
                      <img id="imgAdd" src="../images/addUser.png" />
                    </ion-list>
                    <ion-label>
                      <h1 id="title-register">Registro</h1>
                    </ion-label>
                  </ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label position="floating">Usuario</ion-label>
                      <ion-input type="text" v-model="usuario"></ion-input>
                    </ion-item>
                    <ion-label class="alerta">
                      {{ errorUser }}
                    </ion-label>
                    <ion-item>
                      <ion-label position="floating">Email</ion-label>
                      <ion-input
                        type="email"
                        v-model="email"
                        requirea
                      ></ion-input>
                    </ion-item>
                    <ion-label> {{ errorEmail }} </ion-label>
                    <ion-item>
                      <ion-label position="floating">Contraseña</ion-label>
                      <ion-input type="password" v-model="password"></ion-input>
                    </ion-item>
                  </ion-list>
                  <ion-button expand="block" @click="registerValidation"
                    >Registrar</ion-button
                  >
                  <!-- <ion-button expand="block" @click="login">Login</ion-button> -->
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </form>
    </ion-content>
  </ion-page>
</template>
<script lang="typescript">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  alertController,
  IonInput,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  // IonImg,
  IonItem,
  IonButtons,
  IonBackButton,
  loadingController
} from "@ionic/vue";
import { defineComponent } from "vue";
import "bootstrap";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
  // addDoc,
  // onSnapshot,
} from "firebase/firestore";
// import {loadAnimation} from 'lottie-web';
// import {defineLordIconElement} from 'lord-icon-element';
import "@/dbFirebase/initFirabase";
import router from "@/router";
import app from "@/dbFirebase/initFirabase";
import sha256 from "js-sha256";
// import { setDoc } from "@firebase/firestore/dist/lite";
export default defineComponent({
  name: "RegisterLinea",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonButton,
    // IonImg,
    IonItem,
    // alertController,
    IonButtons,
    IonBackButton,
    // loadingController
  },
  data() {
    return {
      db : getFirestore(app),
      usuario: "",
      password: "",
      email: "",
      error: "",
      errorUser: "",
      errorEmail: "",
    };
  },
  mounted() {
    this.presentLoading()
    // this.registerValidation();
    // loadAnimation(document.getElementById('animation'), '../animations/animation-w500-h500.json');
  },
  props: {
    timeout: { type: Number, default: 1000 },
  },
  methods: {
    async presentLoading() {
      const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: this.timeout,
        });
        
      await loading.present();
      
      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
    async presentLoadingWithOptions() {
      const loading = await loadingController
        .create({
          spinner: null,
          duration: this.timeout,
          message: 'Click the backdrop to dismiss early...',
          translucent: true,
          cssClass: 'custom-class custom-loading',
          backdropDismiss: true
        });
        
      await loading.present();
        
      setTimeout(function() {
        loading.dismiss()
      }, this.timeout);
    },
    
    async errorLogin() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Error al registrar datos",
        // subHeader: "Datos no encontrados",
        message: this.error,
        buttons: ["OK"],
      });
      await alert.present();

      // const { role } = await alert.onDidDismiss();
      // console.log('onDidDismiss resolved with role', role);
    },
    async registrar() {
      //  firestore export in vue
     
      // const querySnapshot = await getDocs(collection(this.db, "usuarios"));
      // console.log(querySnapshot,"Prueba");
      const newCityRef = doc(collection(this.db, "usuarios"));
      const newUser = {
        usuario: this.usuario,
        password: sha256.sha256(this.password),
        email: this.email,
      };
      const newUserRef = await setDoc(newCityRef, newUser);
      this.email = "";
      this.password = "";
      this.usuario = "";
      router.replace("/registro")
    },
    async registerValidation() {
      
      const querySnapshot = await getDocs(collection(this.db, "usuarios"));
      console.log("Prueba");
      querySnapshot.docs.forEach((doc) => {
        console.log(doc.data());
        if (doc.data().usuario == this.usuario) {
          this.errorUser = "Usuario ya existe";
        }
        if (doc.data().email == this.email) {
          this.errorEmail = "Email ya existe";
        }
      });
            this.presentLoading()
            this.registrar();
      
      //consultar los datos ingresados en el formulario y si estan registrados enviar directo al login
      //consultar datos en tiempo real
      
            // this.errorLogin();
     
    },
    validarEmail() {
      //hacer un verificación del email para ver si ya esta registrado
      //eslint-disable-next-line
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(this.email)) {
        return true;
      } else {
        return false;
      }
    },
  },
});
</script>

<style scoped>
.alerta {
  color: red;
}
#imgAdd {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
}
#title-register {
  text-align: center;
}
</style>