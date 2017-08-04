import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-dogs', 'Integration | Component | list dogs', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{list-dogs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#list-dogs}}
      template block text
    {{/list-dogs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
