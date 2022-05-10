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
            <ion-item>
              <ion-label position="floating">Uri</ion-label>
              <ion-input type="text" v-model="uri"></ion-input>
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
            <ion-item>
              <ion-label position="floating">Descripción</ion-label>
              <ion-input type="text" v-model="descripcion"></ion-input>
            </ion-item>
          
                <ion-img :src="imagens"></ion-img>
            
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
  alertController,
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
  IonImg
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
    IonImg
  },
  data() {
    return {
      id: "",
      titulo: "",
      autor: "",
      genero: "",
      descripcion: "",
      imagens:"",
      error:"",
      uri:""
    };
  },
  methods: {
    async errorLogin(error: string) {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Error en la conexión",
        // subHeader: "Datos no encontrados",
        message: error + " Ingrese un ID valido",
        buttons: ["OK"],
      });
      await alert.present();
    },
    viewApi() {

      apiRest(this.uri+this.id).then((response) => {
        console.log(response.data);
        this.titulo = response.data.titulo;
        this.autor = response.data.autor;
        this.genero = response.data.genero;
        this.descripcion=response.data.descripcion;
        this.imagens=response.data.imagen;
        
      }).catch((error) => {
        this.errorLogin(error);
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