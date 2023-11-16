window.BX = {
  ajax: {
    runAction(method) {
      let result;
      switch (method) {
        case 'twinpx:seller.api.methods.sites':
          result = new Promise((resolve) => {
            resolve({
              status: 'success',
              data: [
                {
                  id: 's1',
                  name: '\u0421\u0430\u0439\u0442 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e',
                },
                {
                  id: 'st',
                  name: 'Site Test',
                },
              ],
              errors: [],
            });
          });
          break;

        case 'twinpx:seller.api.methods.pages':
          result = new Promise((resolve) => {
            resolve({
              status: 'success',
              data: [
                {
                  id: '11',
                  name: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430',
                  icon: '/upload/document.svg',
                  preview: '/upload/block.png',
                },
                {
                  id: '12',
                  name: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433',
                  icon: '/upload/catalog.svg',
                  preview: '/upload/block.png',
                },
                {
                  id: '13',
                  name: '\u041a\u043e\u0440\u0437\u0438\u043d\u0430',
                  icon: '/upload/cart.svg',
                  preview: '/upload/block.png',
                },
              ],
              errors: [],
            });
          });
          break;

        case 'twinpx:seller.api.methods.blocks':
          result = new Promise((resolve) => {
            resolve({
              status: 'success',
              data: {
                other: [
                  {
                    id: '111',
                    name: '\u0411\u0430\u043d\u043d\u0435\u0440',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: '/upload/block.png',
                    settings: [],
                    variants: [
                      {
                        id: '1111',
                        name: '\u0411\u0430\u043d\u043d\u0435\u0440',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '112',
                    name: '\u0411\u0440\u0435\u043d\u0434\u044b',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: '/upload/block.png',
                    settings: [],
                    variants: [
                      {
                        id: '1121',
                        name: '\u0411\u0440\u0435\u043d\u0434\u044b',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '113',
                    name: '\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: '/upload/block.png',
                    settings: [],
                    variants: [
                      {
                        id: '1131',
                        name: '\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '114',
                    name: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: '/upload/block.png',
                    settings: [],
                    variants: [
                      {
                        id: '1141',
                        name: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '115',
                    name: '\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: '/upload/block.png',
                    settings: [],
                    variants: [
                      {
                        id: '1151',
                        name: '\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                ],
                top: [
                  {
                    id: 't00',
                    name: '\u0428\u0430\u043f\u043a\u0430',
                    preview: '/upload/block.png',
                    settings: [],
                    activeVariant: 't002',
                    variants: [
                      {
                        id: 't001',
                        name: '\u0428\u0430\u043f\u043a\u0430 1',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                      {
                        id: 't002',
                        name: '\u0428\u0430\u043f\u043a\u0430 2 (\u043a\u0430\u0441\u0442\u043e\u043c)',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                      {
                        id: 't003',
                        name: '\u0428\u0430\u043f\u043a\u0430 3',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                ],
                bottom: [
                  {
                    id: 'b99',
                    name: '\u041f\u043e\u0434\u0432\u0430\u043b',
                    preview: '/upload/block.png',
                    settings: [],
                    activeVariant: 'b993',
                    variants: [
                      {
                        id: 'b991',
                        name: '\u041f\u043e\u0434\u0432\u0430\u043b 1',
                        preview: '/upload/block.png',
                      },
                      {
                        id: 'b993',
                        name: '\u041c\u043e\u0439 \u0444\u0443\u0442\u0435\u0440',
                        preview: '/upload/block.png',
                      },
                    ],
                  },
                ],
              },
              errors: [],
            });
          });
          break;

        case 'twinpx:seller.api.methods.block':
          result = new Promise((resolve) => {
            resolve({
              status: 'success',
              data: {
                id: '113',
                name: '\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
                description:
                  '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                preview: '/upload/block.png',
                settings: [],
                variants: [],
              },
              errors: [],
            });
          });
          break;

        case 'twinpx:seller.api.methods.savePagesOrder':
          result = new Promise((resolve) => {
            resolve({ status: 'success', data: true, errors: [] });
          });
          break;
        case 'twinpx:seller.api.methods.saveBlocksOrder':
          result = new Promise((resolve) => {
            resolve({ status: 'success', data: true, errors: [] });
          });
          break;
      }

      return result;
    },
  },
};
