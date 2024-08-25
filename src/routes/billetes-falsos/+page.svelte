<script lang="ts">
  import { CardCont } from "$lib/components";
</script>

<main>
  <h1>Medidas de seguridad Dólar</h1>

  <div class="container">
    <CardCont>
      <div class="security">
        <div class="security__img-cont">
          <img
            class="security__img"
            src="/img/security/100SusSurface.webp"
            alt="Superficie de alto relieve"
          />
        </div>
        <div class="security__text-cont">
          <h3 class="security__title">Silueta de alto relieve</h3>
          <p class="security__text">
            Al pasar los dedos sobre la silueta de Benjamin Franklin, se puede
            sentir una textura ligerament rugosa (con relieve).
          </p>
        </div>
      </div>
    </CardCont>
    <CardCont>
      <div class="security">
        <div class="security__img-cont">
          <img
            class="security__img"
            src="/img/security/100SusThread.webp"
            alt="Superficie de alto relieve"
          />
        </div>
        <div class="security__text-cont">
          <h3 class="security__title">Hilo de seguridad</h3>
          <p class="security__text">
            Banda vertical cerca del lado izquierdo del billete. Al observarlo
            bajo luz ultravioleta, el hilo emite un brillo rosado, y a simple
            vista, muestra el texto <strong>"USA 100"</strong> repetidamente a lo
            largo del hilo.
          </p>
        </div>
      </div>
    </CardCont>
    <CardCont>
      <h2>This is som etitle</h2>
    </CardCont>
  </div>
</main>

<style lang="scss">
  main {
    @include content-container;
  }
  .container {
    display: grid;
    margin-top: $size-8;
    grid-template-columns: repeat(3, 1fr);
    gap: $size-4;
  }
  .security {
    &__img-cont {
      height: 250px;
      width: 100%;
    }
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__text-cont {
      padding: $size-3 $size-3;
    }
    &__title {
      font-weight: 700;
      font-size: $font-size-lg;
      margin-bottom: $size-2;
    }
    &__text {
      color: var(--text-2);
      font-size: $font-size-md;
    }
  }
</style>
