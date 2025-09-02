/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    {id: 1, title: 'Jurasic Park', main_character: 'Dr. Alan Grant', year_released: '1995'},
    {id: 2, title: 'Good Will Hunting', main_character: 'Will Hunting', year_released: '2001'},
    {id: 3, title: 'Aladin', main_character: 'Aladin', year_released: '1991'}
  ]);
};
