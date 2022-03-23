<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Registro APP Linea 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  <ion-image>
                    <center>
                      <!-- <lord-icon trigger="hover" src="../images/stars.json"></lord-icon> -->
                      <img src="../images/addUser.png" alt="" id="imgAdd" />
                    </center>
                  </ion-image>
                  <ion-label>
                    <center>
                      <h1>Registro</h1>
                    </center>
                  </ion-label>
                </ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-list>
                  <ion-item>
                    <ion-label position="floating">Usuario</ion-label>
                    <ion-input type="text" v-model="usuario"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input
                      type="email"
                      v-model="email"
                      requirea
                    ></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" v-model="password"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="prueba"
                  >Registrar</ion-button
                >
                <ion-button expand="block" @click="login">Login</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid> </ion-content
    >q
  </ion-page>
</template>
<script lang="typescript">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonTitle,
  IonInput,
  alertController,
} from "@ionic/vue";
import { defineComponent } from "vue";
import {
  getFirestore,
  doc,
  setDoc,
  getDocs,
  collection,
} from "firebase/firestore/lite";
// import {loadAnimation} from 'lottie-web';
// import {defineLordIconElement} from 'lord-icon-element';
import "@/dbFirebase/initFirabase";
import router from "@/router";
import app from "@/dbFirebase/initFirabase";
import sha256 from "js-sha256";
export default defineComponent({
  name: "RegisterLinea",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    // alertController,
  },
  data() {
    return {
      usuario: "",
      password: "",
      email: "",
      error: "",
    };
  },
  methods: {
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
    registrar() {
      //  firestore export in vue
      const db = getFirestore(app);
      if (
        this.usuario.length > 0 &&
        this.password.length > 0 &&
        this.email.length > 0
      ) {
        setDoc(doc(db, "usuarios", this.usuario), {
          email: this.email,
          password: sha256.sha256(this.password),
        });
        this.usuario = "";
        this.password = "";
        this.email = "";

        router.push("/login");
      }
    },
    login() {
      router.push("/login");
    },
    async prueba() {
      const db = getFirestore(app);
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      querySnapshot.forEach((doc) => {
        if (doc.data().email == this.email) {
          // console.log("este email ya esta registra");
          this.error = "Este email ya esta registrado";
          this.errorLogin()
        } else if (doc.id == this.usuario) {
          // console.log("este usuario ya esta registrado");
          this.error = "Este usuario ya esta registrado";
          this.errorLogin()
        } else {
          this.registrar();
        }
        console.log(doc.id, " => ", doc.data());
      });
    },
  },
  // mounted(){
  //     defineLordIconElement();
  // }
});
</script>

<style scoped>
#imgAdd {
  width: 100px;
  height: 100px;
}
</style>