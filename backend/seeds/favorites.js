/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favorites').del()
  await knex('favorites').insert([
    {id: 1, title: 'Jurasic Park', main_character: 'Alan Grant', year_released: '1993'},
    {id: 2, title: 'Good Will Hunting', main_character: 'Will Hunting', year_released: '1997'},
    {id: 3, title: 'Indiana Jones', main_character: 'Indian Jones', year_released: '1988'}
  ]);
};
                                                                                                                                                                            