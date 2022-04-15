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
              <h1 id="icon-papanoel">🎅</h1>
              <h1 id="title-home">Bienvenido</h1>
            </ion-label>
          </ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-list>
            <ion-button expand="block" @click="login">Login</ion-button>
            <ion-button expand="block" @click="registro">Registro</ion-button>
            <ion-button expand="block" @click="apirest">Apirest</ion-button>
          </ion-list>
        </ion-card-content>
      </ion-card>
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
  IonLabel,
  // IonGrid,
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonButton,
  loadingController,
  IonRouterOutlet,
} from "@ionic/vue";
import { defineComponent } from "vue";
import router from "@/router";

export default defineComponent({
  name: "HomePage",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    // IonGrid,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonButton,
    // loadingController,
  },
  data() {
    return {
      getData: "",
    };
  },
  props: {
    timeout: { type: Number, default: 1000 },
  },
  methods: {
    login() {
      router.push("/login");
    },
    registro() {
      router.push("/registro");
    },
    apirest() {
      //routerAnimation
      router.push("/restapp");
      // router.push("/restapp");
      this.presentLoading()
    },
    async presentLoading() {
      const loading = await loadingController.create({
        cssClass: "my-custom-class",
        message: "Cargando...",
        duration: this.timeout,
      });

      await loading.present();

      setTimeout(function () {
        loading.dismiss();
      }, this.timeout);
    },
  },
});
</script>

<style scoped>
#title-home {
  text-align: center;
}
#icon-papanoel {
  text-align: center;
}
</style>
