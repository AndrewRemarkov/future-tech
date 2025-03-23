class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error('Невозможно создать экземпляр абстрактного класса BaseComponent!');
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, property) => {
        return target[property];
      },
      set: (target, property, newValue) => {
        const oldValue = target[property];

        target[property] = newValue;

        if (newValue !== oldValue) {
          this.updateUI();
        }

        return true;
      },
    });
  }

  /* Перерисовка UI в ответ на обновление состояния */
  updateUI() {
    throw new Error('Необходимо реализовать метод updateUI!');
  }
}

export default BaseComponent;
