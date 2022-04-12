<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title> 🦄 Bienvenido</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bienvenido</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-card-header>
          <ion-card-title>
            <ion-label>
              <center>
                <h1 id="icon-papanoel">🦄</h1>
                <h1>Bienvenido</h1>
              </center>
            </ion-label>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="floating">id</ion-label>
              <ion-input type="text" v-model="id"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="block" @click="login">Get</ion-button>
          <ion-button expand="block" @click="login">Post</ion-button>

          <!-- <ion-button expand="block" @click="registro">Registro</ion-button> -->
        </ion-card-content>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="floating">nombre</ion-label>
              <ion-input type="text" v-model="nombre"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">correo</ion-label>
              <ion-input type="password" v-model="correo"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">username</ion-label>
              <ion-input type="password" v-model="username"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="block" @click="login">Get</ion-button>
          <ion-button expand="block" @click="login">Post</ion-button>

          <!-- <ion-button expand="block" @click="registro">Registro</ion-button> -->
        </ion-card-content>
      </ion-card>
      <!-- {{getData}} -->
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonLabel,
  // alertController,
  // IonGrid,
  // IonRow,
  // IonCol,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  
} from "@ionic/vue";
import { defineComponent } from "vue";
import {apiRest} from "../apirest/apirest";
export default defineComponent({
  name: "RestApp",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonLabel,
    // alertController,
    // IonGrid,
    // IonRow,
    // IonCol,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonButton,
  },
  mounted() {
    apiRest()
  }
});
</script>

<style>
</style>