window.seller2PageSettingsStore = {
  pages: [
    {
      pageId: '123',
      pageName: 'Главная страница',
      pageStructure: {
        header: {
          blockId: '456',
          blockCode: 'header1',
          blockName: 'Шапка 1',
        },
        footer: {
          blockId: '458',
          blockCode: 'footer1',
          blockName: 'Подвал 1',
        },
        blocks: [
          {
            blockId: '457',
            blockCode: 'banners',
            blockName: 'Баннеры',
            sort: 20,
          },
          {
            blockId: '459',
            blockCode: 'advantages',
            blockName: 'Преимущества',
            sort: 25,
          },
          {
            blockId: '451',
            blockCode: 'about',
            blockName: 'О компании',
            sort: 10,
          },
          {
            blockId: '452',
            blockCode: 'brands',
            blockName: 'Бренды',
            sort: 5,
          },
          {
            blockId: '453',
            blockCode: 'shops',
            blockName: 'Магазины',
            sort: 451,
          },
        ],
      },
    },
    {
      pageId: '124',
      pageName: 'Корзина',
      pageStructure: {
        header: {
          blockId: '456',
          blockCode: 'header1',
          blockName: 'Шапка 1',
        },
        footer: {
          blockId: '458',
          blockCode: 'footer1',
          blockName: 'Подвал 1',
        },
        blocks: [
          {
            blockId: '157',
            blockCode: 'cart',
            blockName: 'Корзина',
            sort: 1,
          },
        ],
      },
    },
    {
      pageId: '125',
      pageName: 'Каталог',
      pageStructure: {
        header: {
          blockId: '456',
          blockCode: 'header1',
          blockName: 'Шапка 1',
        },
        footer: {
          blockId: '458',
          blockCode: 'footer1',
          blockName: 'Подвал 1',
        },
        blocks: [
          {
            blockId: '257',
            blockCode: 'catalog',
            blockName: 'Каталог',
            sort: 2,
          },
          {
            blockId: '258',
            blockCode: 'filter',
            blockName: 'Фильтр',
            sort: 1,
          },
        ],
      },
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
};

document.getElementById('seller2PageSettings').addEventListener(
  'seller2PageSettingsSave',
  (e) => {
    console.log(e.detail);
  },
  false
);
