<template>
  <div class="character-info">
    <h3>Информация о персонаже:</h3>
    <ul>
      <li><strong>Имя:</strong> {{ personData.name }}</li>
      <li><strong>Рост:</strong> {{ personData.height }} см</li>
      <li><strong>Вес:</strong> {{ personData.mass }} кг</li>
      <li><strong>Цвет волос:</strong> {{ personData.hair_color }}</li>
      <li><strong>Цвет кожи:</strong> {{ personData.skin_color }}</li>
      <li><strong>Цвет глаз:</strong> {{ personData.eye_color }}</li>
      <li><strong>Год рождения:</strong> {{ personData.birth_year }}</li>
      <li><strong>Пол:</strong> {{ personData.gender }}</li>
      <li>
        <strong>Домашняя планета:</strong>
        <a :href="personData.homeworld">{{ personData.homeworld }}</a>
      </li>
      <li>
        <strong>Фильмы:</strong>
        <ul>
          <li v-for="film in personData.films" :key="film">
            <a :href="film">{{ film }}</a>
          </li>
        </ul>
      </li>
      <li>
        <strong>Транспорт:</strong>
        <ul>
          <li v-for="vehicle in personData.vehicles" :key="vehicle">
            <a :href="vehicle">{{ vehicle }}</a>
          </li>
        </ul>
      </li>
      <li>
        <strong>Звездолеты:</strong>
        <ul>
          <li v-for="starship in personData.starships" :key="starship">
            <a :href="starship">{{ starship }}</a>
          </li>
        </ul>
      </li>
      <li><strong>Создан:</strong> {{ personData.created }}</li>
      <li><strong>Отредактирован:</strong> {{ personData.edited }}</li>
      <li>
        <strong>URL:</strong> <a :href="personData.url">{{ personData.url }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    personData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
.character-info {
  margin: 20px 0px;
  font-family: Arial, sans-serif;
  background-color: #f0f0f029;
  padding: 20px;
  border-radius: 8px;
  height: 100%;
  overflow: scroll;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.character-info h3 {
  color: #333;
}

.character-info ul {
  list-style-type: none;
  padding: 0;
}

.character-info ul li {
  margin-bottom: 10px;
}

.character-info ul li strong {
  font-weight: bold;
  margin-right: 5px;
}

.character-info ul li a {
  color: #007bff;
  text-decoration: none;
}

.character-info ul li a:hover {
  text-decoration: underline;
}
</style>
