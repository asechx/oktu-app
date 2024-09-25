import { prisma } from './prisma-client';

async function up() {
  await prisma.department.createMany({
    data: [
      {
        name: 'Электрик',
        shortDescription:
          'Специалист, который устанавливает, обслуживает и ремонтирует системы электроснабжения, сети связи, электроцепи, системы освещения и управления электрооборудованием, электрические приборы.',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=9963f9a84e26801ded6c30bedf1c577f_l-5249239-images-thumbs&n=13',
      },
      {
        name: 'Повар-кондитер',
        shortDescription:
          'Высококвалифицированное приготовление пищи и десертов в ресторанах, кафе и других заведениях общественного питания.',
        imageUrl:
          'https://vpechatleniya.ru/upload/iblock/3b6/5xzp61a4a5ngatd7m1wze166mebgzf1x.jpeg',
      },
      {
        name: 'Туризм и гостеприимство',
        shortDescription:
          'Комплексная организация и проведение экскурсий, путешествий для групп и индивидуальных туристов.',
        imageUrl:
          'https://avatars.dzeninfra.ru/get-zen_doc/1525719/pub_6030eea7a332dd7373ec4f30_6030f24e084cc34524836db7/scale_1200',
      },
      {
        name: 'Экономика и бухгалтерское учет',
        shortDescription:
          'Анализ экономических данных, составление детальных финансовых отчетов, управление сложными бюджетами крупных организаций.',
        imageUrl: 'https://пресса56.рф/uploads/posts/2022-07/financial-min.webp',
      },
      {
        name: 'Торговое дело',
        shortDescription:
          'Разработка и реализация стратегий розничной и оптовой торговли, управление сетями торговых центров и супермаркетов.',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=a97d857536e74771f230a212188fc4a0_l-5884156-images-thumbs&n=13',
      },
      {
        name: 'Документальное обеспечение управления',
        shortDescription:
          'Подготовка и оформление официальных документов, связанных с принятием важных управленческих решений.',
        imageUrl:
          'https://i.vuzopedia.ru/storage/app/uploads/public/633/ed7/ac1/633ed7ac18798340724464.jpg',
      },
      {
        name: 'Информационные системы и программирование',
        shortDescription:
          'Специальность охватывает достаточно широкий спектр сфер профессиональной деятельности, что позволяет получить знания о безопасности информационных систем, техническом обслуживании и ремонте компьютеров, администрировании сетей, прикладном и системном программировании, WEB-дизайне и графическом моделировании объектов.',
        imageUrl:
          'https://razoom.mgutm.ru/pluginfile.php/932/course/overviewfiles/dcb4bf9ef3dceed4e45e918a91a0e65209826062_1024_568.jpg',
      },
      {
        name: 'Технология машиностроения',
        shortDescription:
          'Для тех, кто стремится что-то делать своими руками, управлять современными станками и сложными машинами, выполнять чертежи на компьютере, точить детали на станке.',
        imageUrl:
          'https://www.mivlgu.ru/iop/pluginfile.php/57698/course/overviewfiles/1614858190_129-p-inzhenernii-fon-152.jpg',
      },
      {
        name: 'Слесарь',
        shortDescription:
          'Специалист по ручной обработке металлов, древесины и других материалов, включая операции по их сборке, разборке и ремонту на производстве или в быту',
        imageUrl:
          'https://www.allianzgi.com/-/media/allianzgi/globalagi/editorial/booming-us-economy/2304x1296-booming-us-economy.jpg?rev=67f166b3cdfb49b4b8c49a394cf21f74&hash=D44E15A9C382F3D911BE7EBF0495B92B',
      },
    ],
  });

  await prisma.mainSliderData.createMany({
    data: [
      {
        title: 'ГАПОУ КО «Обнинский колледж технологий и услуг',
        text: 'Министерство образования и науки Калужской Области',
        imageUrl: 'https://i.pinimg.com/originals/e8/cf/4f/e8cf4f370ac203852ca706f70229e1dc.jpg',
      },
      {
        title: 'Информационные системы и программирование',
        text: 'Стань востребованным специалистом в сфере IT',
        imageUrl:
          'https://avatars.mds.yandex.net/get-altay/9833397/2a00000188f7c674bae6c89f2b612d16e872/orig',
      },
      {
        title: 'Объявялется набор!',
        text: 'В ОКТУ во всю идет прием новых абитуриентов. Приемная комиссия работает до 21 августа. Успейте подать документы!',
        imageUrl: 'https://mguu.ru/wp-content/uploads/2016/07/21B8727-1.jpg',
      },
    ],
  });

  await prisma.quote.create({
    data: {
      author: 'Директор ОКТУ Ксения Николаевна Лаптева',
      text:
        'Мы уже более 100 лет готовим кадры для всевозможных отраслей Калужской области. Сегодня\n' +
        'обучение в техникуме ведётся по семи основным профессиональным образовательным программам\n' +
        'среднего профессионального образования.',
      imageUrl: 'https://tcek63.ru/local/templates/tcerk63/img/boss.jpg',
    },
  });

  await prisma.titlesSection.createMany({
    data: [
      {
        name: 'Абитуриентам',
        href: '/enrollee',
        imageUrl: 'https://cdn.culture.ru/images/a5f89336-b34e-58b8-9850-69a8b6eef443',
      },
      {
        name: 'Студентам',
        href: '/students',
        imageUrl: 'https://www.hse.ru/data/2019/07/09/1480012687/1shutterstock_1077839504.jpg',
      },
      {
        name: 'Педагогам',
        href: '/teachers',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=02c1a67a8fb08273ebd84327311f824a_l-5233966-images-thumbs&n=13',
      },
      {
        name: 'Образование',
        href: '/enrollee',
        imageUrl:
          'https://avatars.dzeninfra.ru/get-zen_doc/4581585/pub_640d6c350c912a32a1938ad7_640d6dbd352af862c44ec20e/scale_1200',
      },
      {
        name: 'Профессионалитет',
        href: '/fp-professionals',
        imageUrl:
          'https://sun9-44.userapi.com/impg/TZZu-o-5SAR2XX-yFJkZv3C39uzQXQoyaljHiA/EkT2fWTziXc.jpg?size=807x454&quality=96&sign=e7ffccd3f77500773ed396fb47269480&c_uniq_tag=tcDWX0dnb4AAqzm_fVXaCHTgOdEalQbx_T_3RaCl-sk&type=album',
      },
    ],
  });

  await prisma.post.createMany({
    data: [
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
    ],
  });

  await prisma.image.createMany({
    data: [
      {
        name: 'На всеобщем собрании',
      },
      {
        name: 'Собрание перед повышением квалификации',
      },
      {
        name: 'Атомный диктант',
      },
    ],
  });

  await prisma.imageItem.createMany({
    data: [
      {
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=2a000001921cac0d87d36cc3d3fc31ec391e-934138-fast-images&n=13',
        imageId: 1,
      },
      {
        imageUrl: 'https://smolgazeta.ru/fc-web/fc-files/2024/09/147762.jpg',
        imageId: 1,
      },
      {
        imageUrl: 'https://img-fotki.yandex.ru/get/103922/319871141.41/0_1d9f09_bf7effb_orig.jpg',
        imageId: 2,
      },
      {
        imageUrl: 'https://apt29.ru/wp-content/uploads/2021/06/DSC_0007-3-2048x1365.jpg',
        imageId: 2,
      },
      {
        imageUrl:
          'https://ilmen.minobr63.ru/wp-content/uploads/IMG-8759ad1130b718b6ab3f6e9d331cb7a7-V.jpg',
        imageId: 3,
      },
    ],
  });
  await prisma.link.createMany({
    data: [
      {
        name: 'Основные сведения',
        href: '/information/common',
        mainSliderDataId: 1,
      },
      {
        name: 'Перейти к профессии',
        href: '/professions/1',
        mainSliderDataId: 2,
      },
      {
        name: 'Подать документы',
        href: '/contacts',
        mainSliderDataId: 3,
      },
      {
        name: 'Из рабочего графика',
        href: '/news',
        quoteId: 1,
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Department" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "MainSliderData" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Link" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Quote" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "TitlesSection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Image" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ImageItem" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });