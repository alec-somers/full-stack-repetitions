/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    {title: 'The Dark Knight', main_character: "Bruce Wayne", year_released: 2010 },
    {title: 'The Big Lebowski', main_character: "The Dude", year_released: 1998 },
    {title: '28 Years Later', main_character: "Jim", year_released: 2002 }
  ]);
};
