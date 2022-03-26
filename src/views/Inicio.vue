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
      </ion-card>
    </ion-content>
  </ion-page>
</template>
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: "InicioLinea",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    
    IonLabel,
  },
});
</script>

<style>
</style>