import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-chatapp/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chats', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Chats />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Chats>
        template block text
      </Chats>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
