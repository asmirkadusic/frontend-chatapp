import { module, test } from 'qunit';
import { setupRenderingTest } from 'frontend-chatapp/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | chat-rooms', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ChatRooms />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ChatRooms>
        template block text
      </ChatRooms>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
