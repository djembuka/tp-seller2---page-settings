window.seller2PageSettingsStore = {
  scaffold: {
    header: {
      id: '456',
      code: 'header1',
      data: {
        title: 'Шапка',
        description: {
          step1:
            'Блок шапка показывается на всех страницах сайта. Вы можете выбрать шаблон этого блока.',
          step2: 'Выберите вариант шапки вашего сайта.',
        },
        edit: 'Изменить',
        icon: '/img/lock.svg',
      },
      templates: [
        {
          id: '991',
          title: 'Шапка 01',
          img: '/img/header1.png',
          edit: 'Настроить',
          checked: true,
        },
        {
          id: '992',
          title:
            'Шапка с логотипом, поиском, верхним меню, телефоном, нижним меню',
          img: '/img/header1.png',
          edit: 'Настроить',
        },
        {
          id: '993',
          title: 'Шапка 03',
          img: '/img/header1.png',
          edit: 'Настроить',
        },
        {
          id: '994',
          title: 'Шапка 04',
          img: '/img/header1.png',
          edit: 'Настроить',
        },
      ],
    },
    footer: {
      id: '458',
      code: 'footer1',
      data: {
        title: 'Подвал',
        description: {
          step1:
            'Блок подвал показывается на всех страницах сайта. Вы можете выбрать шаблон этого блока.',
          step2: 'Выберите вариант подвала вашего сайта.',
        },
        edit: 'Изменить',
        icon: '/img/lock.svg',
      },
      templates: [
        {
          id: '991',
          title: 'Подвал 01',
          img: '/img/header1.png',
          edit: 'Настроить',
          checked: true,
        },
        {
          id: '992',
          title:
            'Подвал с логотипом, поиском, верхним меню, телефоном, нижним меню',
          img: '/img/header1.png',
          edit: 'Настроить',
        },
        {
          id: '993',
          title: 'Подвал 03',
          img: '/img/header1.png',
          edit: 'Настроить',
        },
        {
          id: '994',
          title: 'Подвал 04',
          img: '/img/header1.png',
          edit: 'Настроить',
        },
      ],
    },
  },
  pages: [
    {
      id: '123',
      name: 'Главная страница',
      blocks: [
        {
          id: '457',
          code: 'banners',
          sort: 20,
          data: {
            title: 'Баннеры',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант баннеров вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Баннеры 01',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Баннеры с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
        {
          id: '459',
          code: 'advantages',
          sort: 25,
          data: {
            title: 'Преимущества',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Преимущества 02',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Преимущества с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
        {
          id: '451',
          code: 'about',
          sort: 10,
          data: {
            title: 'О компании',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'О компании 02',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'О компании с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
        {
          id: '452',
          code: 'brands',
          sort: 5,
          data: {
            title: 'Бренды',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Бренды 02',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Бренды с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
        {
          id: '453',
          code: 'shops',
          sort: 451,
          data: {
            title: 'Магазины',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Магазины 02',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Магазины с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
      ],
    },
    {
      id: '124',
      name: 'Корзина',
      blocks: [
        {
          id: '157',
          code: 'cart',
          sort: 1,
          data: {
            title: 'Корзина',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Корзина 02',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Корзина с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
      ],
    },
    {
      id: '125',
      name: 'Каталог',
      blocks: [
        {
          id: '257',
          code: 'catalog',
          sort: 2,
          data: {
            title: 'Каталог',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Каталог 02',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Каталог с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
        {
          id: '258',
          code: 'filter',
          sort: 1,
          data: {
            title: 'Фильтр',
            description: {
              step1: 'Вы можете выбрать шаблон этого блока.',
              step2: 'Выберите вариант блока для вашего сайта.',
            },
            edit: 'Изменить',
          },
          templates: [
            {
              id: '991',
              title: 'Фильтр',
              img: '/img/header1.png',
              edit: 'Настроить',
              checked: true,
            },
            {
              id: '992',
              title:
                'Фильтр с логотипом, поиском, верхним меню, телефоном, нижним меню',
              img: '/img/header1.png',
              edit: 'Настроить',
            },
          ],
        },
      ],
    },
  ],
  buttons: [
    {
      code: 'cancel',
      name: 'Отмена',
    },
    {
      code: 'save',
      name: 'Сохранить',
    },
  ],
  onSave(result) {
    console.log(result);
  },
};
