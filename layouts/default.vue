<template>
  <div>
    <v-app>
      <Header />
        <slot />
      <Footer />
    </v-app>
  </div>
</template>

<style>
  .v-row {
    margin: 0px !important
  }
</style>