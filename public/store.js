window.seller2PageSettingsStore = {
  scaffold: {
    header: {
      blockId: '456',
      blockCode: 'header1',
      blockData: {
        title: 'Шапка 01',
        description:
          'Блок шапка показывается на всех страницах сайта. Вы можете выбрать шаблон этого блока.',
        edit: 'Изменить',
        icon: '/img/lock.svg',
      },
      blockTemplates: [
        {
          title: 'Шапка 01',
          img: '/img/templates/header01.svg',
          edit: 'Настроить',
          active: true,
        },
        {
          title:
            'Шапка с логотипом, поиском, верхним меню, телефоном, нижним меню',
          img: '/img/templates/header01.svg',
          edit: 'Настроить',
          active: false,
        },
        {
          title: 'Шапка 03',
          img: '/img/templates/header01.svg',
          edit: 'Настроить',
          active: false,
        },
        {
          title: 'Шапка 04',
          img: '/img/templates/header01.svg',
          edit: 'Настроить',
          active: false,
        },
      ],
    },
    footer: {
      blockId: '458',
      blockCode: 'footer1',
      blockData: {
        title: 'Подвал 01',
        description:
          'Блок подвал показывается на всех страницах сайта. Вы можете выбрать шаблон этого блока.',
        edit: 'Изменить',
        icon: '/img/lock.svg',
      },
    },
  },
  pages: [
    {
      pageId: '123',
      pageName: 'Главная страница',
      pageBlocks: [
        {
          blockId: '457',
          blockCode: 'banners',
          sort: 20,
          blockData: {
            title: 'Баннеры 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
        {
          blockId: '459',
          blockCode: 'advantages',
          sort: 25,
          blockData: {
            title: 'Преимущества 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
        {
          blockId: '451',
          blockCode: 'about',
          sort: 10,
          blockData: {
            title: 'О компании 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
        {
          blockId: '452',
          blockCode: 'brands',
          sort: 5,
          blockData: {
            title: 'Бренды 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
        {
          blockId: '453',
          blockCode: 'shops',
          sort: 451,
          blockData: {
            title: 'Магазины 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
      ],
    },
    {
      pageId: '124',
      pageName: 'Корзина',
      pageBlocks: [
        {
          blockId: '157',
          blockCode: 'cart',
          sort: 1,
          blockData: {
            title: 'Корзина 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
      ],
    },
    {
      pageId: '125',
      pageName: 'Каталог',
      pageBlocks: [
        {
          blockId: '257',
          blockCode: 'catalog',
          sort: 2,
          blockData: {
            title: 'Каталог 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
        {
          blockId: '258',
          blockCode: 'filter',
          sort: 1,
          blockData: {
            title: 'Фильтр 01',
            description: 'Вы можете выбрать шаблон этого блока.',
            edit: 'Изменить',
          },
        },
      ],
    },
  ],
  buttons: [
    {
      buttonCode: 'cancel',
      buttonName: 'Отмена',
    },
    {
      buttonCode: 'save',
      buttonName: 'Сохранить',
    },
  ],
  onSave(result) {
    console.log(result);
  },
};
