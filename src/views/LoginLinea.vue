<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Login Linea APP</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  <ion-label>
                    <h1 id="icon-papanoel">🎅</h1>
                    <h1 id="title-login">Login</h1>
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
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" v-model="password"></ion-input>
                  </ion-item>
                </ion-list>
                <ion-button expand="block" @click="login">Login</ion-button>
                <!-- <ion-button expand="block" @click="registro">Registro</ion-button> -->
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import "@/dbFirebase/initFirabase";
import app from "@/dbFirebase/initFirabase";
import { getFirestore, doc, getDoc } from "firebase/firestore/lite";
import router from "@/router";
import sha256 from "js-sha256";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonLabel,
  alertController,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginLinea",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
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
    IonButtons,
    IonBackButton,
  },
  data() {
    return {
      usuario: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async errorLogin() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "No se pudo iniciar sesión",
        // subHeader: "Datos no encontrados",
        message: this.error,
        buttons: ["OK"],
      });
      await alert.present();

      // const { role } = await alert.onDidDismiss();
      // console.log('onDidDismiss resolved with role', role);
    },
    async login() {
      const password = sha256.sha256(this.password);
      const user = this.usuario;
      console.log(user);
      const db = getFirestore(app);
      const docRef = doc(db, "usuarios", user);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const pass = docSnap.data();
        // console.log("Document data", docSnap.data().password)
        // console.log(pass.password);
        if (pass.password == password) {
          router.push("/inicio");
        } else {
          this.error = "Contraseña incorrecta";
          this.errorLogin();
        }
      } else {
        this.error = "Usuario no encontrado";
        this.errorLogin();
      }
    },
  },
});
</script>
<style scoped>
#icon-papanoel {
  text-align: center;
  font-size: 100px;
}
#title-login {
  text-align: center;
}
</style>
