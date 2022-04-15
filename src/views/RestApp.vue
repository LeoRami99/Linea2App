<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="home"></ion-back-button>
        </ion-buttons>
        <ion-title> 📖 Bienvenido 📖</ion-title>
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
            <ion-label class="title-app">
              <h1 id="icon-papanoel">📖</h1>
              <h1>Libros API</h1>
            </ion-label>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="floating">Id</ion-label>
              <ion-input type="text" v-model="id"></ion-input>
            </ion-item>
          </ion-list>
          <ion-button expand="block" @click="viewApi">Get</ion-button>
          <!-- <ion-button expand="block" @click="login">Post</ion-button> -->

          <!-- <ion-button expand="block" @click="registro">Registro</ion-button> -->
        </ion-card-content>
        <ion-card-content>
          <ion-list>
            <ion-item>
              <ion-label position="floating">Titulo</ion-label>
              <ion-input type="text" v-model="titulo"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Autor</ion-label>
              <ion-input type="text" v-model="autor"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Genero</ion-label>
              <ion-input type="text" v-model="genero"></ion-input>
            </ion-item>
            <!-- {{getData}} -->
          </ion-list>
          <!-- <ion-button expand="block" @click="viewApi">Get</ion-button> -->
          <!-- <ion-button expand="block" @click="login">Post</ion-button> -->

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
  IonButtons,
  IonBackButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { apiRest } from "../apirest/apirest";
// import axios from 'axios';
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
    IonButtons,
    IonBackButton,
  },
  data() {
    return {
      id: "",
      titulo: "",
      autor: "",
      genero: "",
    };
  },
  methods: {
    viewApi() {
      apiRest("http://192.168.0.11:8080/libros/" + this.id).then((res) => {
        //convertir a json
        // console.log(res.data);
        this.titulo = res.data.titulo;
        this.autor = res.data.autor;
        this.genero = res.data.genero;
      });
    },
  },
});
</script>

<style>
.title-app {
  text-align: center;
}
</style>