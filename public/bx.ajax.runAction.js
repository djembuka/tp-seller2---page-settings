window.BX = {
  ajax: {
    runAction(method, data) {
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

        case 'twinpx:seller.api.methods.settings':
          result = new Promise((resolve) => {
            resolve({
              status: 'success',
              data: {
                properties: [
                  {
                    property: 'file',
                    id: 'id_logo',
                    name: 'FILE_LOGO',
                    label: 'Логотип',
                    hint_external:
                      'Этот логотип будет отображаться на вашем сайте.',
                    required: true,
                    disabled: false,
                    accept: ['svg', 'png', 'jpg', 'jpeg'],
                    image: true,
                    maxsize: 10000000,
                  },
                  {
                    property: 'file',
                    id: 'id_logo_light',
                    name: 'FILE_LOGO_LIGHT',
                    label: 'Логотип для светлой темы',
                    hint_external:
                      'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                    required: true,
                    disabled: false,
                    accept: ['svg', 'png', 'jpg', 'jpeg', 'gif'],
                    image: true,
                    maxsize: 10000000,
                  },
                  {
                    property: 'file',
                    id: 'id_logo_dark',
                    name: 'FILE_LOGO_DARK',
                    label: 'Логотип для темной темы',
                    hint_external:
                      'Этот логотип будет отображаться на вашем сайте, в режиме светлой темы, сделайте его контрастным.',
                    required: true,
                    disabled: false,
                    accept: ['svg', 'png', 'jpg', 'jpeg'],
                    image: true,
                    maxsize: 10000000,
                  },
                  {
                    property: 'file',
                    id: 'id_favicon',
                    name: 'FILE_FAVICON',
                    label: 'Favicon',
                    hint_external:
                      'Этот логотип будет отображаться на вашем сайте, в режиме светлой темы, сделайте его контрастным.',
                    required: true,
                    disabled: false,
                    accept: ['svg', 'png', 'jpg', 'jpeg', 'ico'],
                    image: true,
                    maxsize: 10000000,
                  },
                  {
                    property: 'file',
                    id: 'id_logo_email',
                    name: 'FILE_LOGO_EMAIL',
                    label: 'Логотип для почтовых шаблонов',
                    hint_external:
                      'Этот логотип будет отображаться в почтовых шаблонах.',
                    required: true,
                    disabled: false,
                    accept: ['png', 'jpg', 'jpeg', 'gif'],
                    image: true,
                    maxsize: 10000000,
                  },
                  {
                    property: 'file',
                    id: 'id_web_clip',
                    name: 'FILE_WEB_CLIP',
                    label: 'Web Clip Icon 180x180',
                    hint_external:
                      'Эта иконка передается для индексации поисковыми системами.',
                    required: true,
                    disabled: false,
                    accept: ['png', 'png'],
                    image: true,
                    maxsize: 10000000,
                  },
                  {
                    property: 'heading',
                    id: 'id_theme_heading',
                    label: 'Тема оформления:',
                  },
                  {
                    property: 'select',
                    type: 'radio',
                    id: 'id_theme_radio',
                    name: 'THEME',
                    label: 'Тема',
                    options: [
                      {
                        label: 'Светлая тема',
                        code: '1',
                      },
                      {
                        label: 'Темная тема',
                        code: '2',
                      },
                    ],
                    value: '2',
                  },
                  {
                    property: 'color',
                    id: 'id_color_primary',
                    label: 'Цвет один',
                    name: 'COLOR_PRIMARY',
                    required: true,
                    value: '#CC33CC',
                  },
                  {
                    property: 'color',
                    id: 'id_color_secondary',
                    label: 'Цвет два',
                    name: 'COLOR_SECONDARY',
                    required: true,
                    value: '#CC33CC',
                  },
                  {
                    property: 'color',
                    id: 'id_color_tertiary',
                    label: 'Цвет три',
                    name: 'COLOR_TERTIARY',
                    required: true,
                    value: '#CC33CC',
                  },
                  {
                    property: 'heading',
                    id: 'id_content_width',
                    label: 'Ширина сайта:',
                  },
                  {
                    property: 'select',
                    type: 'radio',
                    id: 'id_content_radio',
                    name: 'CONTENT_WIDTH',
                    label: 'Ширина сайта',
                    options: [
                      {
                        label: '1 200 px',
                        code: '1',
                      },
                      {
                        label: '1 355 px',
                        code: '2',
                      },
                      {
                        label: '1 500 px',
                        code: '3',
                      },
                      {
                        label: '1 700 px',
                        code: '4',
                      },
                    ],
                    value: '3',
                  },
                  {
                    property: 'text',
                    id: 'id_button_radius',
                    name: 'BUTTON_RADIUS',
                    label: 'Радиус скругления кнопок',
                    value: '2',
                    required: true,
                    disabled: false,
                    regexp: '^d$',
                    regexp_description: 'Значение поля должно быть числом',
                    hint_internal: 'Введите число',
                    hint_external:
                      'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                  },
                ],
              },
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
                  icon: 'upload/document.svg',
                  preview: 'upload/block.png',
                },
                {
                  id: '12',
                  name: '\u041a\u0430\u0442\u0430\u043b\u043e\u0433',
                  icon: 'upload/catalog.svg',
                  preview: 'upload/block.png',
                },
                {
                  id: '13',
                  name: '\u041a\u043e\u0440\u0437\u0438\u043d\u0430',
                  icon: 'upload/cart.svg',
                  preview: 'upload/block.png',
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
                    preview: 'upload/block.png',
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
                        preview: 'upload/block.png',
                        settings: {
                          properties: [
                            {
                              property: 'select',
                              type: 'dropdown',
                              id: 'id80',
                              name: 'ACTIVITY_TYPES',
                              label: 'Select control',
                              options: [
                                {
                                  label:
                                    'molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
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
                              value: '',
                              disabled: false,
                              hint_external:
                                'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                              //   dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Colorpicker',
                            },
                            {
                              property: 'color',
                              id: 'id45',
                              label: 'Цвет фона',
                              name: 'COLOR',
                              required: true,
                              value: '#CC3399',
                              primary: '#ff33bb',
                              secondary: '#a3ff33',
                              hint_external: 'Подсказка',
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Datepicker',
                            },
                            {
                              property: 'date',
                              type: 'single',
                              id: 'id451',
                              label: 'Календарь',
                              name: 'DATE',
                              required: true,
                              value: '28.02.2024',
                              hint_external:
                                'Подсказка для checkbox может быть неожиданно очень длинной.',
                              dependency: 'id6',
                            },
                            {
                              property: 'date',
                              type: 'range',
                              id: 'id452',
                              label: 'Календарь',
                              name: 'DATE',
                              required: true,
                              value: ['20.02.2024', '28.02.2024'],
                              hint_external:
                                'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'File input',
                            },
                            {
                              property: 'file',
                              id: 'id0',
                              name: 'FILE',
                              label: 'Картинка превью',
                              value:
                                'fileВведите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем..pdf',
                              required: true,
                              disabled: false,
                              accept: ['pdf', 'exe', 'jpg'],
                              image: true,
                              maxsize: 10000000,
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Text input',
                            },
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
                              property: 'heading',
                              id: 'idH0',
                              label: 'Textarea',
                            },
                            {
                              property: 'textarea',
                              id: 'id2',
                              type: 'formatted',
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
                              property: 'textarea',
                              id: 'id20',
                              type: 'plain',
                              name: 'TEXT_PLAIN',
                              label: 'Textarea без форматирования',
                              value:
                                'Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <a href="">Ab blanditiis</a> molestias <i>velit eaque</i>, ut dolorum dolore aperiam dolorem? Obcaecati <span style="color: pink;">facere magni</span>, eligendi deleniti corrupti totam, temporibus magnam vero reprehenderit veritatis illo ab impedit quibusdam aliquid! Inventore illum, deserunt sunt qui repellat natus soluta? Itaque magnam odit facilis, nemo similique, molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              required: true,
                              disabled: false,
                              hint_external: 'Подробно опишите задание',
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Multiselect',
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
                              property: 'heading',
                              id: 'idH0',
                              label: 'Radio buttons',
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
                              property: 'heading',
                              id: 'idH0',
                              label: 'Switch',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id111',
                              name: 'SWITCH',
                              required: false,
                              label:
                                'labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id112',
                              name: 'SWITCH',
                              required: false,
                              label:
                                'molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id113',
                              name: 'SWITCH',
                              required: false,
                              label: '',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id114',
                              name: 'SWITCH',
                              required: false,
                              label:
                                'labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
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
                        preview: 'upload/block.png',
                        settings: {
                          properties: [
                            {
                              property: 'select',
                              type: 'dropdown',
                              id: 'id80',
                              name: 'ACTIVITY_TYPES',
                              label: 'Select control',
                              options: [
                                {
                                  label:
                                    'molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
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
                              value: '',
                              disabled: false,
                              hint_external:
                                'Введите подсказку для этого блока, которая может быть очень длинная, но мы не будем ее выводить всегда, иногда подсказки не будет совсем.',
                              //   dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Colorpicker',
                            },
                            {
                              property: 'color',
                              id: 'id45',
                              label: 'Цвет фона',
                              name: 'COLOR',
                              required: true,
                              value: '#CC3399',
                              primary: '#ff33bb',
                              secondary: '#a3ff33',
                              hint_external: 'Подсказка',
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Datepicker',
                            },
                            {
                              property: 'date',
                              type: 'single',
                              id: 'id451',
                              label: 'Календарь',
                              name: 'DATE',
                              required: true,
                              value: '28.02.2024',
                              hint_external:
                                'Подсказка для checkbox может быть неожиданно очень длинной.',
                              dependency: 'id6',
                            },
                            {
                              property: 'date',
                              type: 'range',
                              id: 'id452',
                              label: 'Календарь',
                              name: 'DATE',
                              required: true,
                              value: ['20.02.2024', '28.02.2024'],
                              hint_external:
                                'Подсказка для checkbox может быть неожиданно очень длинной.',
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'File input',
                            },
                            {
                              property: 'file',
                              id: 'id0',
                              name: 'FILE',
                              label: 'Картинка превью',
                              value: 'file.pdf',
                              required: true,
                              disabled: false,
                              accept: ['pdf', 'exe', 'jpg'],
                              image: true,
                              maxsize: 10000000,
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Text input',
                            },
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
                              property: 'heading',
                              id: 'idH0',
                              label: 'Textarea',
                            },
                            {
                              property: 'textarea',
                              id: 'id2',
                              type: 'formatted',
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
                              property: 'textarea',
                              id: 'id20',
                              type: 'plain',
                              name: 'TEXT_PLAIN',
                              label: 'Textarea без форматирования',
                              value:
                                'Lorem ipsum dolor sit <b>amet</b> consectetur adipisicing elit. <a href="">Ab blanditiis</a> molestias <i>velit eaque</i>, ut dolorum dolore aperiam dolorem? Obcaecati <span style="color: pink;">facere magni</span>, eligendi deleniti corrupti totam, temporibus magnam vero reprehenderit veritatis illo ab impedit quibusdam aliquid! Inventore illum, deserunt sunt qui repellat natus soluta? Itaque magnam odit facilis, nemo similique, molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              required: true,
                              disabled: false,
                              hint_external: 'Подробно опишите задание',
                              dependency: 'id6',
                            },
                            {
                              property: 'heading',
                              id: 'idH0',
                              label: 'Multiselect',
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
                              property: 'heading',
                              id: 'idH0',
                              label: 'Radio buttons',
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
                              property: 'heading',
                              id: 'idH0',
                              label: 'Switch',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id111',
                              name: 'SWITCH',
                              required: false,
                              label:
                                'labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id112',
                              name: 'SWITCH',
                              required: false,
                              label:
                                'molestias est atque velit sit unde aliquam quis, quod dolore! Eligendi amet aliquid quis maiores dolore eum minus illo sapiente, reprehenderit optio id non repudiandae voluptas, nisi officiis necessitatibus itaque soluta at voluptate odit quasi porro. Corrupti laudantium cupiditate labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id113',
                              name: 'SWITCH',
                              required: false,
                              label: '',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'switch',
                              id: 'id114',
                              name: 'SWITCH',
                              required: false,
                              label:
                                'labore voluptate dolores magnam ea non sunt sint facere velit, harum illum?',
                              value: 'on',
                              checked: true,
                              disabled: false,
                              hint_external: '',
                              dependency: 'id6',
                            },
                            {
                              property: 'checkbox',
                              type: 'checkbox',
                              id: 'id86',
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
                        id: '1119',
                        name: '\u0411\u0430\u043d\u043d\u0435\u0440 3',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '112',
                    name: '\u0411\u0440\u0435\u043d\u0434\u044b',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: 'upload/block.png',
                    settings: [],
                    activeVariant: '1121',
                    variants: [
                      {
                        id: '1121',
                        name: '\u0411\u0440\u0435\u043d\u0434\u044b',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '113',
                    name: '\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: 'upload/block.png',
                    settings: [],
                    activeVariant: '1131',
                    variants: [
                      {
                        id: '1131',
                        name: '\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '114',
                    name: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: 'upload/block.png',
                    settings: [],
                    activeVariant: '1141',
                    variants: [
                      {
                        id: '1141',
                        name: '\u041c\u0430\u0433\u0430\u0437\u0438\u043d\u044b',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                  {
                    id: '115',
                    name: '\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430',
                    description:
                      '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                    preview: 'upload/block.png',
                    settings: [],
                    activeVariant: '1151',
                    variants: [
                      {
                        id: '1151',
                        name: '\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430',
                        description:
                          '\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u044d\u0442\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0430',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                ],
                top: [
                  {
                    id: 't00',
                    name: '\u0428\u0430\u043f\u043a\u0430',
                    preview: 'upload/block.png',
                    settings: {},
                    activeVariant: 't002',
                    variants: [
                      {
                        id: 't001',
                        name: '\u0428\u0430\u043f\u043a\u0430 1',
                        preview: 'upload/block.png',
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
                          ],
                        },
                      },
                      {
                        id: 't002',
                        name: '\u0428\u0430\u043f\u043a\u0430 2 (\u043a\u0430\u0441\u0442\u043e\u043c)',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                      {
                        id: 't003',
                        name: '\u0428\u0430\u043f\u043a\u0430 3',
                        preview: 'upload/block.png',
                        settings: [],
                      },
                    ],
                  },
                ],
                bottom: [
                  {
                    id: 'b99',
                    name: '\u041f\u043e\u0434\u0432\u0430\u043b',
                    preview: 'upload/block.png',
                    settings: [],
                    activeVariant: 'b993',
                    variants: [
                      {
                        id: 'b991',
                        name: '\u041f\u043e\u0434\u0432\u0430\u043b 1',
                        preview: 'upload/block.png',
                      },
                      {
                        id: 'b993',
                        name: '\u041c\u043e\u0439 \u0444\u0443\u0442\u0435\u0440',
                        preview: 'upload/block.png',
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
                preview: 'upload/block.png',
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

        case 'twinpx:seller.api.methods.saveBlocksSettings':
          result = new Promise((resolve) => {
            resolve({ status: 'success', data: true, errors: [] });
          });
          break;
      }

      return result;
    },
  },
};
