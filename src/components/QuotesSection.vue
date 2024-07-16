<template>
  <section class="quote_section">
    <div class="quote_section_quote-bg">
      <div class="quote_section_quote_symbol--open"></div>

      <p>
        Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но и
        выработать список рекомендаций для повышения этого показателя.
      </p>

      <div class="quote_section_quote_symbol--close"></div>
    </div>
  </section>
</template>

<style scoped>
.quote_section {
  height: 100%;
  width: 100%;
  background-image: url('../assets/section_two_bg.png');
  background-size: cover;
  text-align: center;
  line-height: 23px;
  letter-spacing: 5%;
}

.quote_section p {
  font-family: 'Yeseva One', serif;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 18px;
}

.quote_section_quote-bg {
  display: flex;
  flex-direction: column;
  background-image: url('../assets/section_two_bg_aura.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 43px 29px 32px 24px;
  position: relative;
  height: 100%;
  width: 100%;
}

.quote_section_quote_symbol--open {
  height: 24px;
  background-image: url('../assets/quote.png');
  background-repeat: no-repeat;
  margin-bottom: 18px;
}

.quote_section_quote_symbol--close {
  height: 24px;
  width: 24px;
  background-image: url('../assets/quote_close.png');
  background-repeat: no-repeat;
  align-self: flex-end;
}
</style>
