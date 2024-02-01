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
                    settings: {
                      enabled: true,
                    },
                    activeVariant: '1111',
                    variants: [
                      {
                        id: '1111',
                        name: '\u0411\u0430\u043d\u043d\u0435\u0440 1',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: {
                          properties: [
                            {
                              property: 'text',
                              id: 'id1',
                              name: 'NAME',
                              label: 'Текстовое поле',
                              value: '2',
                              required: true,
                              disabled: false,
                              regexp: '^(0|1|2)$',
                              regexp_description:
                                'Значение поля должно быть 0, или 1, или 2',
                              hint_internal: 'Введите 0, 1 или 2',
                              hint_external: 'Введите от 0 до 2',
                              dependency: 'id6',
                            },
                            {
                              property: 'textarea',
                              id: 'id2',
                              name: 'TEXT_FORMATTED',
                              label: 'Textarea с форматированием',
                              value:
                                'Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <a href="">Ab blanditiis</a> molestias <i>velit eaque</i>, ut dolorum dolore aperiam dolorem? Obcaecati <span style="color: pink;">facere magni</span>, eligendi deleniti corrupti totam, temporibus magnam vero reprehenderit veritatis illo ab impedit quibusdam aliquid! Inventore illum, deserunt sunt qui repellat natus soluta? Itaque magnam odit facilis, nemo similique, molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              required: true,
                              disabled: false,
                              hint_external: 'Подробно опишите задание',
                              dependency: 'id6',
                            },
                            {
                              property: 'multiselect',
                              id: 'id4',
                              name: 'POINTS',
                              label: 'Пункты для выбора',
                              options: [
                                {
                                  label: 'Машиностроение',
                                  code: '23423423423',
                                },
                                {
                                  label: 'Сельское хозяйство',
                                  code: '324234324',
                                },
                                {
                                  label: 'Пункт 2',
                                  code: '324234325',
                                },
                                {
                                  label: 'Пункт 2',
                                  code: '324234326',
                                },
                                {
                                  label: 'Пункт 2',
                                  code: '324234327',
                                },
                                {
                                  label: 'Длинный пункт меню',
                                  code: '324234328',
                                },
                                {
                                  label: 'Сельское хозяйство',
                                  code: '324234329',
                                },
                                {
                                  label: 'Длинный пункт меню',
                                  code: '3242343210',
                                },
                                {
                                  label: 'Пункт 2',
                                  code: '3242343211',
                                },
                                {
                                  label: 'Пункт 2',
                                  code: '3242343212',
                                },
                              ],
                              value: ['23423423423', '324234325'],
                              required: false,
                              disabled: false,
                              hint_external:
                                'Выберите несколько пунктов из списка',
                              dependency: 'id6',
                            },
                            {
                              property: 'select',
                              type: 'radio',
                              id: 'id5',
                              name: 'ACTIVITY_TYPES',
                              label: 'Radio кнопки',
                              options: [
                                {
                                  label: 'Машиностроение',
                                  code: '23423423423',
                                },
                                {
                                  label: 'Сельское хозяйство',
                                  code: '324234324',
                                },
                                {
                                  label:
                                    'Очень длинный пункт меню, который можно добавить к радио кнопке с переносом строки',
                                  code: '324234325',
                                },
                              ],
                              value: '23423423423',
                              hint_external:
                                'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'checkbox',
                              id: 'id6',
                              name: 'DEPENDENCY_CHECKBOX',
                              required: false,
                              label:
                                'Checkbox, от которого зависят остальные поля',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external:
                                'Если нажать, будут активны зависимые поля.',
                            },
                          ],
                        },
                      },
                      {
                        id: '1110',
                        name: '\u0411\u0430\u043d\u043d\u0435\u0440 2',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: '/upload/block.png',
                        settings: [],
                      },
                      {
                        id: '1119',
                        name: '\u0411\u0430\u043d\u043d\u0435\u0440 3',
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
                    activeVariant: '1121',
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
                    activeVariant: '1131',
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
                    activeVariant: '1141',
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
                    activeVariant: '1151',
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
                    settings: {},
                    activeVariant: 't002',
                    variants: [
                      {
                        id: 't001',
                        name: '\u0428\u0430\u043f\u043a\u0430 1',
                        preview: '/upload/block.png',
                        settings: {
                          properties: [
                            {
                              type: 'text',
                              id: 'id1',
                              label: 'Текстовое поле',
                              value: '2',
                              required: true,
                              disabled: false,
                              regexp: '^(0|1|2)$',
                              regexp_description:
                                'Значение поля должно быть 0, или 1, или 2',
                              hint_internal: 'Введите 0, 1 или 2',
                              hint_external: 'Введите от 0 до 2',
                              // dependency: 'id2',
                            },
                            // {
                            //   property: 'textarea',
                            //   id: '123sdfdsf34r13',
                            //   label: 'Пример textarea',
                            //   value:
                            //     'Вот ещё один вариант изображения кассовой стойки в магазине одежды во время зимних распродаж, с прилавками с носками перед стойкой. Этот магазин имеет более праздничную и живую атмосферу. Если вам нужны дополнительные варианты или есть другие запросы, пожалуйста, сообщите мне!',
                            //   hint_external:
                            //     'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                            //   formatted: false,
                            // },
                            // {
                            //   property: 'textarea',
                            //   id: '123sdfdsf34r13',
                            //   label: 'Пример textarea с форматированием',
                            //   value:
                            //     'Вот ещё один <b>вариант</b> изображения кассовой стойки в магазине одежды во время зимних распродаж, с <span style="color: yellow; text-decoration: underline;">прилавками</span> с носками перед стойкой. Этот магазин имеет более праздничную и живую атмосферу. Если вам нужны дополнительные варианты или есть другие запросы, пожалуйста, сообщите мне!',
                            //   hint_external:
                            //     'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                            //   formatted: true,
                            // },
                            // {
                            //   property: 'checkbox',
                            //   type: 'checkbox',
                            //   id: '234234234231',
                            //   label: 'Очень',
                            //   value: 'value2',
                            //   hint_external: '',
                            //   dependency: '345345345345',
                            // },
                            // {
                            //   property: 'checkbox',
                            //   type: 'checkbox',
                            //   id: '234234234232',
                            //   label: 'Очень длинный пункт меню',
                            //   value: 'value3',
                            //   checked: true,
                            //   hint_external:
                            //     'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                            //   dependency: '345345345345',
                            // },
                            // {
                            //   property: 'multiselect',
                            //   id: '234234234235',
                            //   label: 'Типы производства',
                            //   options: [
                            //     {
                            //       label: 'Машиностроение',
                            //       code: '23423423423',
                            //     },
                            //     {
                            //       label: 'Сельское хозяйство',
                            //       code: '324234324',
                            //     },
                            //     {
                            //       label: 'Пункт 2',
                            //       code: '324234325',
                            //     },
                            //     {
                            //       label: 'Пункт 2',
                            //       code: '324234326',
                            //     },
                            //     {
                            //       label: 'Пункт 2',
                            //       code: '324234327',
                            //     },
                            //     {
                            //       label: 'Длинный пункт меню',
                            //       code: '324234328',
                            //     },
                            //     {
                            //       label: 'Сельское хозяйство',
                            //       code: '324234329',
                            //     },
                            //     {
                            //       label: 'Длинный пункт меню',
                            //       code: '3242343210',
                            //     },
                            //     {
                            //       label: 'Пункт 2',
                            //       code: '3242343211',
                            //     },
                            //     {
                            //       label: 'Пункт 2',
                            //       code: '3242343212',
                            //     },
                            //   ],
                            //   value: ['23423423423'],
                            //   hint_external: 'Подсказка',
                            //   dependency: '345345345345',
                            // },
                            // {
                            //   property: 'date',
                            //   id: '345345345348',
                            //   label: 'Календарь',
                            //   value: '30.01.2023',
                            //   dependency: '345345345345',
                            // },
                            // {
                            //   property: 'checkbox',
                            //   id: '345345345345',
                            //   label: 'Во весь экран',
                            //   value: true,
                            // },
                          ],
                        },
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
