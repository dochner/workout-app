import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Personal } from '~/types/entities/Personal'

export const usePersonalStore = defineStore('personals', () => {
  const personals = ref<Personal[]>([
    {
      id: 'ee27a92f-12e1-4162-bd3d-9146c33793c5',
      firstName: 'Northrop',
      lastName: 'Dunnion',
      fullName: 'Northrop Dunnion',
      email: 'ndunnion0@clickbank.net',
      gender: 'Polygender',
      specialties: ['Third Age', 'Bodybuilding', 'Slimming'],
      price: 125.31,
      classGenre: 'Male',
      uf: 'AM',
      cref: '156376-G/AM',
      image: '/images/personals/1.png',
      phone: '+63 472 885 0516',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      shortDescription:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '1a90ade4-df8c-40fc-8536-c77d00f66652',
      firstName: 'Albertine',
      lastName: 'Searight',
      fullName: 'Albertine Searight',
      email: 'asearight1@wikispaces.com',
      gender: 'Female',
      specialties: ['Third Age', 'Bodybuilding', 'Slimming'],
      price: 387.88,
      classGenre: 'Male',
      uf: 'AC',
      cref: '037307-G/AC',
      image: '/images/personals/2.png',
      phone: '+355 772 600 0160',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '280e7459-bc33-4dc7-96f6-04cc8442efd4',
      firstName: 'Chaim',
      lastName: 'Tedstone',
      fullName: 'Chaim Tedstone',
      email: 'ctedstone2@shop-pro.jp',
      gender: 'Male',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 300.36,
      classGenre: 'Female',
      uf: 'AP',
      cref: '287706-G/AP',
      image: '/images/personals/3.png',
      phone: '+98 778 372 5905',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      shortDescription: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'd7415f2d-9e88-4010-92ab-a763c09df9f7',
      firstName: 'Genovera',
      lastName: 'Vineall',
      fullName: 'Genovera Vineall',
      email: 'gvineall3@naver.com',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 431.65,
      classGenre: 'Any',
      uf: 'BA',
      cref: '680219-G/BA',
      image: '/images/personals/4.png',
      phone: '+86 913 459 4204',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
      shortDescription:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '39ad5302-506f-4fc1-b7de-d63037b4941e',
      firstName: 'Tania',
      lastName: 'Schwandner',
      fullName: 'Tania Schwandner',
      email: 'tschwandner4@mapy.cz',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 8.58,
      classGenre: 'Male',
      uf: 'BA',
      cref: '555087-G/BA',
      image: '/images/personals/5.png',
      phone: '+62 582 949 4356',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      shortDescription:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'ff4e7ab6-88b6-490f-8064-c40cb311def7',
      firstName: 'Briana',
      lastName: 'Ducastel',
      fullName: 'Briana Ducastel',
      email: 'bducastel5@newyorker.com',
      gender: 'Non-binary',
      specialties: ['Third Age', 'Bodybuilding', 'Slimming'],
      price: 35.79,
      classGenre: 'Any',
      uf: 'AL',
      cref: '688037-G/AL',
      image: '/images/personals/6.png',
      phone: '+62 855 329 2514',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      shortDescription: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'a6936444-1a0b-49bf-ba7b-d962add667a5',
      firstName: 'Raquel',
      lastName: 'Geraldez',
      fullName: 'Raquel Geraldez',
      email: 'rgeraldez6@tumblr.com',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 82.55,
      classGenre: 'Male',
      uf: 'AC',
      cref: '406664-G/AC',
      image: '/images/personals/7.png',
      phone: '+27 781 747 7547',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      shortDescription:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '05bff313-38ee-497c-b7df-d5f74104fce7',
      firstName: 'Ogdon',
      lastName: 'Weedon',
      fullName: 'Ogdon Weedon',
      email: 'oweedon7@phoca.cz',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 339.88,
      classGenre: 'Male',
      uf: 'AC',
      cref: '315976-G/AC',
      image: '/images/personals/8.png',
      phone: '+7 107 692 7195',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      shortDescription:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'f695ad8a-d6c0-4365-89e7-c6955fa5e7f2',
      firstName: 'Dela',
      lastName: 'Scollard',
      fullName: 'Dela Scollard',
      email: 'dscollard8@networkadvertising.org',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 249.41,
      classGenre: 'Any',
      uf: 'BA',
      cref: '566413-G/BA',
      image: '/images/personals/9.png',
      phone: '+86 222 512 5956',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      shortDescription:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '63352815-5402-4a27-ac19-565b69ae51b4',
      firstName: 'Micheal',
      lastName: 'Rosellini',
      fullName: 'Micheal Rosellini',
      email: 'mrosellini9@google.com.br',
      gender: 'Male',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 65.38,
      classGenre: 'Male',
      uf: 'BA',
      cref: '744018-G/BA',
      image: '/images/personals/10.png',
      phone: '+55 145 864 5439',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '26a7c8fe-fd76-40d2-adb5-9e988d9be2a1',
      firstName: 'Penny',
      lastName: 'Hanssmann',
      fullName: 'Penny Hanssmann',
      email: 'phanssmanna@wordpress.com',
      gender: 'Female',
      specialties: ['Slimming'],
      price: 477.69,
      classGenre: 'Any',
      uf: 'BA',
      cref: '393726-G/BA',
      image: '/images/personals/11.png',
      phone: '+380 218 680 2436',
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      shortDescription:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'fc60d6ae-660c-48ce-8db8-e4f54b7626b1',
      firstName: 'Martainn',
      lastName: 'Debill',
      fullName: 'Martainn Debill',
      email: 'mdebillb@fastcompany.com',
      gender: 'Male',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 347.18,
      classGenre: 'Female',
      uf: 'AC',
      cref: '812129-G/AC',
      image: '/images/personals/12.png',
      phone: '+62 721 865 8610',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      shortDescription:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '16866451-1890-43e5-a79f-0d3258e1654b',
      firstName: 'Iorgos',
      lastName: 'Boult',
      fullName: 'Iorgos Boult',
      email: 'iboultc@skyrock.com',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 357.32,
      classGenre: 'Any',
      uf: 'AC',
      cref: '890572-G/AC',
      image: '/images/personals/1.png',
      phone: '+86 192 504 3491',
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      shortDescription:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'da543202-a43b-4a56-9869-741983a10baa',
      firstName: 'Aurelea',
      lastName: 'Codrington',
      fullName: 'Aurelea Codrington',
      email: 'acodringtond@theglobeandmail.com',
      gender: 'Female',
      specialties: ['Fitness training'],
      price: 281.02,
      classGenre: 'Female',
      uf: 'BA',
      cref: '100235-G/BA',
      image: '/images/personals/2.png',
      phone: '+1 312 609 1497',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      shortDescription:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '26b06e67-da97-4baf-88c7-242608d68198',
      firstName: 'Dianna',
      lastName: 'Scholefield',
      fullName: 'Dianna Scholefield',
      email: 'dscholefielde@csmonitor.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 9.17,
      classGenre: 'Female',
      uf: 'AC',
      cref: '499774-G/AC',
      image: '/images/personals/3.png',
      phone: '+86 981 129 1417',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      shortDescription:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '36b2f945-a480-492a-afd7-598bf49c5a41',
      firstName: 'Elana',
      lastName: 'Callum',
      fullName: 'Elana Callum',
      email: 'ecallumf@simplemachines.org',
      gender: 'Female',
      specialties: ['Fitness training'],
      price: 457.82,
      classGenre: 'Any',
      uf: 'AL',
      cref: '953078-G/AL',
      image: '/images/personals/4.png',
      phone: '+86 564 324 7607',
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      shortDescription:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '5c16c5f3-1075-4980-b8e5-f2369309dc00',
      firstName: 'Godwin',
      lastName: 'Kenaway',
      fullName: 'Godwin Kenaway',
      email: 'gkenawayg@sourceforge.net',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 490.38,
      classGenre: 'Female',
      uf: 'AM',
      cref: '420252-G/AM',
      image: '/images/personals/5.png',
      phone: '+86 511 941 7518',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'f7fe46f6-a5e9-4c48-9c8a-7c920389c417',
      firstName: 'Danette',
      lastName: 'Rojahn',
      fullName: 'Danette Rojahn',
      email: 'drojahnh@artisteer.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 369.6,
      classGenre: 'Any',
      uf: 'AP',
      cref: '835547-G/AP',
      image: '/images/personals/6.png',
      phone: '+86 126 983 5019',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      shortDescription:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '38d3b681-e5ac-4053-b4e7-6755567204e8',
      firstName: 'Robby',
      lastName: 'Arnell',
      fullName: 'Robby Arnell',
      email: 'rarnelli@instagram.com',
      gender: 'Male',
      specialties: ['Third Age', 'Bodybuilding', 'Slimming'],
      price: 186.56,
      classGenre: 'Female',
      uf: 'AP',
      cref: '492827-G/AP',
      image: '/images/personals/7.png',
      phone: '+66 609 997 3235',
      description:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      shortDescription:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '71beac0c-4985-49a7-9763-45d846e3ed8e',
      firstName: 'Cyb',
      lastName: 'Foard',
      fullName: 'Cyb Foard',
      email: 'cfoardj@google.cn',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 470.24,
      classGenre: 'Female',
      uf: 'AL',
      cref: '517031-G/AL',
      image: '/images/personals/8.png',
      phone: '+54 743 746 0148',
      description:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      shortDescription:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '558df83c-0b1e-47a4-a08e-5af8bec7f39b',
      firstName: 'Rockie',
      lastName: 'Fagge',
      fullName: 'Rockie Fagge',
      email: 'rfaggek@wikispaces.com',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 112.38,
      classGenre: 'Male',
      uf: 'AL',
      cref: '808617-G/AL',
      image: '/images/personals/9.png',
      phone: '+7 637 537 5121',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      shortDescription:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '2e7b916c-5e1c-44fb-81f8-30d60440effc',
      firstName: 'Kitti',
      lastName: 'Stockle',
      fullName: 'Kitti Stockle',
      email: 'kstocklel@sciencedirect.com',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 462.95,
      classGenre: 'Male',
      uf: 'AL',
      cref: '100467-G/AL',
      image: '/images/personals/10.png',
      phone: '+86 115 113 8360',
      description:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      shortDescription:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '26427b2a-429b-4c4e-90d3-d2045aab3f5f',
      firstName: 'Gabbie',
      lastName: 'Vamplers',
      fullName: 'Gabbie Vamplers',
      email: 'gvamplersm@technorati.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 33.53,
      classGenre: 'Male',
      uf: 'AP',
      cref: '416357-G/AP',
      image: '/images/personals/11.png',
      phone: '+966 261 657 2399',
      description:
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
      shortDescription:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '8230eef7-39db-4af9-972b-ac4ff11faaae',
      firstName: 'Mischa',
      lastName: 'Fredson',
      fullName: 'Mischa Fredson',
      email: 'mfredsonn@liveinternet.ru',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 382.45,
      classGenre: 'Female',
      uf: 'AP',
      cref: '324955-G/AP',
      image: '/images/personals/12.png',
      phone: '+86 819 671 3760',
      description:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      shortDescription: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '964b6f72-49dd-4007-a916-d5dcafcf277e',
      firstName: 'Derry',
      lastName: 'Crookall',
      fullName: 'Derry Crookall',
      email: 'dcrookallo@patch.com',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 475.71,
      classGenre: 'Female',
      uf: 'AP',
      cref: '812354-G/AP',
      image: '/images/personals/1.png',
      phone: '+62 610 435 7153',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      shortDescription:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '46222f95-a94f-482f-b2fe-ceac1f331356',
      firstName: 'Torin',
      lastName: 'Sevior',
      fullName: 'Torin Sevior',
      email: 'tseviorp@hao123.com',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 266.65,
      classGenre: 'Male',
      uf: 'AP',
      cref: '817025-G/AP',
      image: '/images/personals/2.png',
      phone: '+62 536 844 4517',
      description:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      shortDescription:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'a21eccc0-4f57-42f8-b500-eafb44ad74d4',
      firstName: 'Marys',
      lastName: 'Bonas',
      fullName: 'Marys Bonas',
      email: 'mbonasq@cdc.gov',
      gender: 'Female',
      specialties: ['Fitness training'],
      price: 116.27,
      classGenre: 'Any',
      uf: 'AM',
      cref: '002037-G/AM',
      image: '/images/personals/3.png',
      phone: '+351 380 767 7361',
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      shortDescription: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '04ac1ae2-18cb-438a-865f-ca020afbf098',
      firstName: 'Shae',
      lastName: 'Garretson',
      fullName: 'Shae Garretson',
      email: 'sgarretsonr@usda.gov',
      gender: 'Female',
      specialties: ['Slimming'],
      price: 300.44,
      classGenre: 'Any',
      uf: 'AP',
      cref: '339861-G/AP',
      image: '/images/personals/4.png',
      phone: '+86 699 161 0355',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      shortDescription:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '3345fa09-7755-4634-9ed4-37b8fb213398',
      firstName: 'Cesaro',
      lastName: 'Enstone',
      fullName: 'Cesaro Enstone',
      email: 'censtones@chron.com',
      gender: 'Male',
      specialties: ['Third Age', 'Bodybuilding', 'Slimming'],
      price: 35.93,
      classGenre: 'Any',
      uf: 'AC',
      cref: '269867-G/AC',
      image: '/images/personals/5.png',
      phone: '+234 175 669 7396',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      shortDescription:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'a4668de7-7ce9-4149-b8b7-008720193ad0',
      firstName: 'Car',
      lastName: 'Askell',
      fullName: 'Car Askell',
      email: 'caskellt@biblegateway.com',
      gender: 'Male',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 284.6,
      classGenre: 'Female',
      uf: 'AC',
      cref: '883972-G/AC',
      image: '/images/personals/6.png',
      phone: '+62 650 523 0151',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      shortDescription:
        'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '08098810-faa9-4180-9016-0abcdd607aff',
      firstName: 'Burr',
      lastName: 'Berendsen',
      fullName: 'Burr Berendsen',
      email: 'bberendsenu@wix.com',
      gender: 'Male',
      specialties: ['Swimming'],
      price: 49.3,
      classGenre: 'Male',
      uf: 'AP',
      cref: '958134-G/AP',
      image: '/images/personals/7.png',
      phone: '+63 267 205 3041',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      shortDescription:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'b1252e0a-2184-479f-afe7-97b8a417248d',
      firstName: 'Burton',
      lastName: 'Drewell',
      fullName: 'Burton Drewell',
      email: 'bdrewellv@latimes.com',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 55.22,
      classGenre: 'Female',
      uf: 'AC',
      cref: '847900-G/AC',
      image: '/images/personals/8.png',
      phone: '+62 891 679 4012',
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      shortDescription:
        'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '101ed09d-4939-41fe-beef-d9e3952c2e6f',
      firstName: 'Aridatha',
      lastName: 'Feldmus',
      fullName: 'Aridatha Feldmus',
      email: 'afeldmusw@github.io',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 422.04,
      classGenre: 'Female',
      uf: 'BA',
      cref: '593555-G/BA',
      image: '/images/personals/9.png',
      phone: '+62 605 655 4157',
      description:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      shortDescription:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '446f074b-e96e-4f15-bb86-16ea7109eb2e',
      firstName: 'Bartram',
      lastName: 'Bettridge',
      fullName: 'Bartram Bettridge',
      email: 'bbettridgex@google.ca',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 244.33,
      classGenre: 'Female',
      uf: 'AL',
      cref: '041895-G/AL',
      image: '/images/personals/10.png',
      phone: '+57 828 617 0684',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      shortDescription:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '07569d56-3bdf-4ecf-8a69-eb5cf4425807',
      firstName: 'Lorianne',
      lastName: 'Langcastle',
      fullName: 'Lorianne Langcastle',
      email: 'llangcastley@google.nl',
      gender: 'Female',
      specialties: ['Third Age'],
      price: 410.35,
      classGenre: 'Female',
      uf: 'AL',
      cref: '531553-G/AL',
      image: '/images/personals/11.png',
      phone: '+66 797 747 8997',
      description:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
      shortDescription:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '3c31b963-bc0c-4006-be25-a077fa1c76e7',
      firstName: 'Hermia',
      lastName: 'Galgey',
      fullName: 'Hermia Galgey',
      email: 'hgalgeyz@paypal.com',
      gender: 'Female',
      specialties: ['Slimming'],
      price: 266.12,
      classGenre: 'Male',
      uf: 'AL',
      cref: '735785-G/AL',
      image: '/images/personals/12.png',
      phone: '+86 356 589 3311',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      shortDescription:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'c75e406c-7303-4b88-9217-5fc8c2ffdc2d',
      firstName: 'Cathy',
      lastName: 'California',
      fullName: 'Cathy California',
      email: 'ccalifornia10@tinyurl.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 425.79,
      classGenre: 'Female',
      uf: 'BA',
      cref: '378308-G/BA',
      image: '/images/personals/1.png',
      phone: '+46 235 151 2265',
      description:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      shortDescription:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '7981813f-0786-47e0-a78e-95567cb515dd',
      firstName: 'Mack',
      lastName: 'Bricksey',
      fullName: 'Mack Bricksey',
      email: 'mbricksey11@microsoft.com',
      gender: 'Male',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 82.8,
      classGenre: 'Male',
      uf: 'AC',
      cref: '011056-G/AC',
      image: '/images/personals/2.png',
      phone: '+63 285 236 1817',
      description:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      shortDescription:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'b5a19c91-452a-4311-9a56-903b8e23f7c3',
      firstName: 'Ailina',
      lastName: 'MacDonnell',
      fullName: 'Ailina MacDonnell',
      email: 'amacdonnell12@shutterfly.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 148.61,
      classGenre: 'Male',
      uf: 'AM',
      cref: '238041-G/AM',
      image: '/images/personals/3.png',
      phone: '+86 557 704 8791',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      shortDescription:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '27bad2ed-eb0f-4f9d-aa5d-e5f5ee582587',
      firstName: 'Buck',
      lastName: 'Thickpenny',
      fullName: 'Buck Thickpenny',
      email: 'bthickpenny13@topsy.com',
      gender: 'Male',
      specialties: ['Third Age'],
      price: 496.33,
      classGenre: 'Any',
      uf: 'AP',
      cref: '458262-G/AP',
      image: '/images/personals/4.png',
      phone: '+995 409 181 7753',
      description:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
      shortDescription:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '5b249015-6a38-46b4-bd41-f9522fe7ee87',
      firstName: 'Carissa',
      lastName: 'Rawkesby',
      fullName: 'Carissa Rawkesby',
      email: 'crawkesby14@seattletimes.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 370.8,
      classGenre: 'Any',
      uf: 'AC',
      cref: '101293-G/AC',
      image: '/images/personals/5.png',
      phone: '+34 794 252 4135',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      shortDescription:
        'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '9cf5ee43-fa14-4dc6-be3c-3ca72cef2760',
      firstName: 'Chloette',
      lastName: 'Guido',
      fullName: 'Chloette Guido',
      email: 'cguido15@canalblog.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 280.89,
      classGenre: 'Female',
      uf: 'AM',
      cref: '876571-G/AM',
      image: '/images/personals/6.png',
      phone: '+62 569 663 6764',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      shortDescription:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '5b22fe4f-3a6a-43cb-8c1f-984607047ebd',
      firstName: 'Land',
      lastName: 'Ramirez',
      fullName: 'Land Ramirez',
      email: 'lramirez16@businessweek.com',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 256.03,
      classGenre: 'Male',
      uf: 'AC',
      cref: '838656-G/AC',
      image: '/images/personals/7.png',
      phone: '+86 865 946 4443',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      shortDescription:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '313012e3-cfaf-4247-bf11-137af137b8a8',
      firstName: 'Kayle',
      lastName: 'Ten Broek',
      fullName: 'Kayle Ten Broek',
      email: 'kten17@merriam-webster.com',
      gender: 'Female',
      specialties: ['Slimming'],
      price: 48.54,
      classGenre: 'Any',
      uf: 'AM',
      cref: '496621-G/AM',
      image: '/images/personals/8.png',
      phone: '+62 753 356 3346',
      description:
        'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '354eab2c-b5c6-4f70-a5b8-3e79e6a3d38b',
      firstName: 'Forest',
      lastName: 'Cline',
      fullName: 'Forest Cline',
      email: 'fcline18@drupal.org',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 35.7,
      classGenre: 'Female',
      uf: 'BA',
      cref: '384511-G/BA',
      image: '/images/personals/9.png',
      phone: '+420 664 674 2201',
      description:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '4c61d669-47a9-4c74-842c-041cc9819ff9',
      firstName: 'Addison',
      lastName: 'Gilbert',
      fullName: 'Addison Gilbert',
      email: 'agilbert19@cloudflare.com',
      gender: 'Male',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 162.03,
      classGenre: 'Male',
      uf: 'AP',
      cref: '808355-G/AP',
      image: '/images/personals/10.png',
      phone: '+98 879 398 6693',
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      shortDescription:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '181308b6-5970-4b85-9fbe-2967dd61fc2c',
      firstName: 'Clemmie',
      lastName: 'Sauvage',
      fullName: 'Clemmie Sauvage',
      email: 'csauvage1a@state.tx.us',
      gender: 'Bigender',
      specialties: ['Third Age'],
      price: 348.75,
      classGenre: 'Male',
      uf: 'AM',
      cref: '346212-G/AM',
      image: '/images/personals/11.png',
      phone: '+86 703 724 2432',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      shortDescription:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'bb4e16b3-f8fa-453a-8b3c-b0e08ee373a7',
      firstName: 'Kort',
      lastName: 'Ellison',
      fullName: 'Kort Ellison',
      email: 'kellison1b@europa.eu',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 444.81,
      classGenre: 'Female',
      uf: 'AL',
      cref: '869430-G/AL',
      image: '/images/personals/12.png',
      phone: '+86 299 407 7316',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      shortDescription: 'Fusce consequat. Nulla nisl. Nunc nisl.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'b934cfc8-2946-4fe2-9299-8a81dd869e01',
      firstName: 'Dulcinea',
      lastName: 'Gricks',
      fullName: 'Dulcinea Gricks',
      email: 'dgricks1c@amazon.de',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 365.12,
      classGenre: 'Female',
      uf: 'AL',
      cref: '423711-G/AL',
      image: '/images/personals/1.png',
      phone: '+55 369 873 4689',
      description:
        'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      shortDescription:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'a15957e4-0ca5-4a6a-8b45-8ffebcbd33c7',
      firstName: 'Vivyanne',
      lastName: 'McEniry',
      fullName: 'Vivyanne McEniry',
      email: 'vmceniry1d@deviantart.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 143.11,
      classGenre: 'Male',
      uf: 'AC',
      cref: '951224-G/AC',
      image: '/images/personals/2.png',
      phone: '+62 269 781 1652',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      shortDescription:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'aee25531-b6f7-41e4-9db7-b3da4dc85d85',
      firstName: 'Alicia',
      lastName: 'Burnage',
      fullName: 'Alicia Burnage',
      email: 'aburnage1e@wunderground.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 17.92,
      classGenre: 'Any',
      uf: 'AL',
      cref: '911673-G/AL',
      image: '/images/personals/3.png',
      phone: '+86 822 372 6167',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      shortDescription:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '9845a863-ad55-4ece-842a-fb3db288dfce',
      firstName: 'Renaud',
      lastName: 'Riddlesden',
      fullName: 'Renaud Riddlesden',
      email: 'rriddlesden1f@epa.gov',
      gender: 'Male',
      specialties: ['Swimming'],
      price: 225.89,
      classGenre: 'Any',
      uf: 'BA',
      cref: '799202-G/BA',
      image: '/images/personals/4.png',
      phone: '+212 781 338 8738',
      description:
        'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      shortDescription:
        'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'ae8ea036-533e-420a-a587-17f1f191b99e',
      firstName: 'Doro',
      lastName: 'Frid',
      fullName: 'Doro Frid',
      email: 'dfrid1g@cisco.com',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 19.85,
      classGenre: 'Male',
      uf: 'AC',
      cref: '985217-G/AC',
      image: '/images/personals/5.png',
      phone: '+51 997 383 3735',
      description:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      shortDescription:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '13faa783-eb97-4d2c-bf25-2a10688d2c1c',
      firstName: 'Minerva',
      lastName: 'Scola',
      fullName: 'Minerva Scola',
      email: 'mscola1h@google.ca',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 251.57,
      classGenre: 'Any',
      uf: 'AM',
      cref: '183185-G/AM',
      image: '/images/personals/6.png',
      phone: '+86 524 448 0242',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      shortDescription:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '83d1f7cc-9ba9-475e-836b-52c6e997f888',
      firstName: 'Kendricks',
      lastName: 'Denman',
      fullName: 'Kendricks Denman',
      email: 'kdenman1i@dailymail.co.uk',
      gender: 'Agender',
      specialties: ['Fitness training'],
      price: 163.01,
      classGenre: 'Any',
      uf: 'AC',
      cref: '572827-G/AC',
      image: '/images/personals/7.png',
      phone: '+48 163 392 6351',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      shortDescription:
        'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'a36e0b1c-df19-401e-9e6d-4920845bc26e',
      firstName: 'Bertrando',
      lastName: 'Lehrer',
      fullName: 'Bertrando Lehrer',
      email: 'blehrer1j@themeforest.net',
      gender: 'Male',
      specialties: ['Swimming'],
      price: 461.49,
      classGenre: 'Male',
      uf: 'AP',
      cref: '223482-G/AP',
      image: '/images/personals/8.png',
      phone: '+358 539 200 9385',
      description:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      shortDescription:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '652c7bf9-8813-48ac-99c7-6a2b9914f6a7',
      firstName: 'Lutero',
      lastName: 'Dikles',
      fullName: 'Lutero Dikles',
      email: 'ldikles1k@baidu.com',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 303.59,
      classGenre: 'Male',
      uf: 'AP',
      cref: '608809-G/AP',
      image: '/images/personals/9.png',
      phone: '+220 633 642 2296',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
      shortDescription: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '7f9cddc1-52ca-4438-97bf-36ff3e08ebd0',
      firstName: 'Eugenio',
      lastName: 'Fairpool',
      fullName: 'Eugenio Fairpool',
      email: 'efairpool1l@unicef.org',
      gender: 'Male',
      specialties: ['Third Age'],
      price: 366.12,
      classGenre: 'Male',
      uf: 'AP',
      cref: '115711-G/AP',
      image: '/images/personals/10.png',
      phone: '+358 747 355 7730',
      description:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      shortDescription:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '79348c99-e883-4131-a6aa-2dda3dd194c8',
      firstName: 'Vassily',
      lastName: 'Letten',
      fullName: 'Vassily Letten',
      email: 'vletten1m@economist.com',
      gender: 'Male',
      specialties: ['Swimming'],
      price: 256.63,
      classGenre: 'Male',
      uf: 'AP',
      cref: '586567-G/AP',
      image: '/images/personals/11.png',
      phone: '+262 199 321 0379',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      shortDescription:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '9768b5c3-5366-4e46-8ae2-68eeefb8f3b6',
      firstName: 'Drake',
      lastName: 'Rassell',
      fullName: 'Drake Rassell',
      email: 'drassell1n@github.com',
      gender: 'Male',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 109.67,
      classGenre: 'Male',
      uf: 'AL',
      cref: '292100-G/AL',
      image: '/images/personals/12.png',
      phone: '+381 939 186 8566',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
      shortDescription:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'a6699df4-db7f-4376-80a4-cedbc7c060a6',
      firstName: 'Addy',
      lastName: 'Carpmile',
      fullName: 'Addy Carpmile',
      email: 'acarpmile1o@seesaa.net',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 7.66,
      classGenre: 'Any',
      uf: 'BA',
      cref: '398647-G/BA',
      image: '/images/personals/1.png',
      phone: '+235 133 183 4473',
      description:
        'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.',
      shortDescription:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'f4a1ca3f-8f92-4737-93f4-c539de8f9485',
      firstName: 'Nico',
      lastName: 'Gammidge',
      fullName: 'Nico Gammidge',
      email: 'ngammidge1p@cdbaby.com',
      gender: 'Male',
      specialties: ['Third Age'],
      price: 225.28,
      classGenre: 'Female',
      uf: 'AM',
      cref: '002012-G/AM',
      image: '/images/personals/2.png',
      phone: '+86 897 649 7923',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      shortDescription:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '031728ee-20f1-4001-859e-7e2a7a507077',
      firstName: 'Norrie',
      lastName: 'Dobing',
      fullName: 'Norrie Dobing',
      email: 'ndobing1q@uiuc.edu',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 308.63,
      classGenre: 'Any',
      uf: 'AL',
      cref: '582573-G/AL',
      image: '/images/personals/3.png',
      phone: '+47 713 737 1066',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      shortDescription:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '300d45ef-53e8-4831-986a-c6ade0298fc8',
      firstName: 'Yetta',
      lastName: 'Oldall',
      fullName: 'Yetta Oldall',
      email: 'yoldall1r@baidu.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 192.83,
      classGenre: 'Any',
      uf: 'AL',
      cref: '882822-G/AL',
      image: '/images/personals/4.png',
      phone: '+86 751 404 7589',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'f8cb4d53-e6be-472e-a6a4-14cc8ad31e53',
      firstName: 'Tony',
      lastName: 'Call',
      fullName: 'Tony Call',
      email: 'tcall1s@instagram.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 309.83,
      classGenre: 'Female',
      uf: 'AP',
      cref: '212308-G/AP',
      image: '/images/personals/5.png',
      phone: '+82 580 165 4622',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'b7eda807-567b-486e-8cf6-23be6b6f761a',
      firstName: 'Carry',
      lastName: 'Polley',
      fullName: 'Carry Polley',
      email: 'cpolley1t@jimdo.com',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 174.94,
      classGenre: 'Female',
      uf: 'AC',
      cref: '082037-G/AC',
      image: '/images/personals/6.png',
      phone: '+86 292 516 5788',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      shortDescription:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '854fc013-6a58-40b8-9948-62c31d2d3e2f',
      firstName: 'Lucky',
      lastName: 'Wike',
      fullName: 'Lucky Wike',
      email: 'lwike1u@dedecms.com',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 355.25,
      classGenre: 'Any',
      uf: 'BA',
      cref: '898261-G/BA',
      image: '/images/personals/7.png',
      phone: '+86 521 851 7948',
      description:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      shortDescription:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'b4a3acae-0c3b-4ec8-8893-7d1ffacab7a0',
      firstName: 'Kendre',
      lastName: 'Harrod',
      fullName: 'Kendre Harrod',
      email: 'kharrod1v@dagondesign.com',
      gender: 'Female',
      specialties: ['Fitness training'],
      price: 428.16,
      classGenre: 'Female',
      uf: 'AP',
      cref: '207975-G/AP',
      image: '/images/personals/8.png',
      phone: '+93 336 757 9942',
      description:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      shortDescription:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '3d35df01-c27d-481e-ad58-f4dbcd141091',
      firstName: 'Zared',
      lastName: 'Duxbury',
      fullName: 'Zared Duxbury',
      email: 'zduxbury1w@craigslist.org',
      gender: 'Male',
      specialties: ['Health and Wellness'],
      price: 337.69,
      classGenre: 'Male',
      uf: 'AM',
      cref: '070075-G/AM',
      image: '/images/personals/9.png',
      phone: '+372 853 264 4884',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      shortDescription:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'de3d8bdd-0c36-4a57-b778-c13b90b89018',
      firstName: 'Frasquito',
      lastName: 'Scripture',
      fullName: 'Frasquito Scripture',
      email: 'fscripture1x@jigsy.com',
      gender: 'Male',
      specialties: ['Health and Wellness'],
      price: 320.37,
      classGenre: 'Any',
      uf: 'AM',
      cref: '613412-G/AM',
      image: '/images/personals/10.png',
      phone: '+95 123 795 4356',
      description:
        'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      shortDescription:
        'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '3d2729f2-0418-4fe8-be34-1f411a528a6c',
      firstName: 'Tamara',
      lastName: 'Reye',
      fullName: 'Tamara Reye',
      email: 'treye1y@tripadvisor.com',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 278.51,
      classGenre: 'Male',
      uf: 'AP',
      cref: '002103-G/AP',
      image: '/images/personals/11.png',
      phone: '+86 274 964 3309',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      shortDescription:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '4ad49d1d-0625-448a-8e11-6873d8c5bfcc',
      firstName: 'Regan',
      lastName: 'Hyslop',
      fullName: 'Regan Hyslop',
      email: 'rhyslop1z@artisteer.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 218.16,
      classGenre: 'Male',
      uf: 'AM',
      cref: '104089-G/AM',
      image: '/images/personals/12.png',
      phone: '+57 384 680 4657',
      description:
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      shortDescription:
        'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '60329c64-9c83-4626-838f-a293db24b314',
      firstName: 'Meir',
      lastName: 'De la Yglesia',
      fullName: 'Meir De la Yglesia',
      email: 'mde20@state.tx.us',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 167.52,
      classGenre: 'Male',
      uf: 'AP',
      cref: '115131-G/AP',
      image: '/images/personals/1.png',
      phone: '+86 132 688 5483',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      shortDescription:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '31ec47d3-9f5a-4002-b9f9-2456ffec1d18',
      firstName: 'Ford',
      lastName: 'Sibly',
      fullName: 'Ford Sibly',
      email: 'fsibly21@qq.com',
      gender: 'Male',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 359.0,
      classGenre: 'Male',
      uf: 'AC',
      cref: '047933-G/AC',
      image: '/images/personals/2.png',
      phone: '+62 104 149 9637',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      shortDescription:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '70dc3ed0-39d0-468e-9a92-73904288d8b3',
      firstName: 'Bradan',
      lastName: 'Sayers',
      fullName: 'Bradan Sayers',
      email: 'bsayers22@paginegialle.it',
      gender: 'Male',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 31.1,
      classGenre: 'Any',
      uf: 'AL',
      cref: '634040-G/AL',
      image: '/images/personals/3.png',
      phone: '+242 830 458 1648',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      shortDescription:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '005fb051-8db3-4313-9857-99917501556f',
      firstName: 'Findlay',
      lastName: 'Luter',
      fullName: 'Findlay Luter',
      email: 'fluter23@forbes.com',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 467.69,
      classGenre: 'Any',
      uf: 'AL',
      cref: '409169-G/AL',
      image: '/images/personals/4.png',
      phone: '+375 647 933 0821',
      description:
        'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      shortDescription:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'f8c88460-bece-4ee3-b414-f6adcb2717f0',
      firstName: 'Thadeus',
      lastName: 'McMillan',
      fullName: 'Thadeus McMillan',
      email: 'tmcmillan24@tuttocitta.it',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 346.59,
      classGenre: 'Female',
      uf: 'AM',
      cref: '093180-G/AM',
      image: '/images/personals/5.png',
      phone: '+46 949 449 9644',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
      shortDescription:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '9c824a52-cc31-4db9-bb64-dc0fde2a737c',
      firstName: 'Eric',
      lastName: 'Pearcey',
      fullName: 'Eric Pearcey',
      email: 'epearcey25@time.com',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 323.37,
      classGenre: 'Female',
      uf: 'AC',
      cref: '983815-G/AC',
      image: '/images/personals/6.png',
      phone: '+420 827 712 0330',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
      shortDescription:
        'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '67f7b49f-7426-421a-854f-d71134a733d5',
      firstName: 'Lyman',
      lastName: 'Girkin',
      fullName: 'Lyman Girkin',
      email: 'lgirkin26@histats.com',
      gender: 'Genderfluid',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 440.42,
      classGenre: 'Any',
      uf: 'AC',
      cref: '405863-G/AC',
      image: '/images/personals/7.png',
      phone: '+86 514 432 4477',
      description:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      shortDescription:
        'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '545f5afe-be28-4680-895d-1d5aad7372a4',
      firstName: 'Bay',
      lastName: 'Dudliston',
      fullName: 'Bay Dudliston',
      email: 'bdudliston27@smugmug.com',
      gender: 'Genderfluid',
      specialties: ['Fitness training'],
      price: 342.23,
      classGenre: 'Male',
      uf: 'BA',
      cref: '951040-G/BA',
      image: '/images/personals/8.png',
      phone: '+63 252 132 1109',
      description:
        'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      shortDescription:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'abfa24a3-f2bb-43be-8a8a-267bc001675a',
      firstName: 'Marline',
      lastName: 'La Batie',
      fullName: 'Marline La Batie',
      email: 'mla28@webs.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 141.18,
      classGenre: 'Female',
      uf: 'AC',
      cref: '936280-G/AC',
      image: '/images/personals/9.png',
      phone: '+86 899 699 9225',
      description:
        'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      shortDescription:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'e8eaab04-d3fb-4c02-82ac-a1585678e1e7',
      firstName: 'Gaylor',
      lastName: 'Wadeling',
      fullName: 'Gaylor Wadeling',
      email: 'gwadeling29@technorati.com',
      gender: 'Male',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 83.75,
      classGenre: 'Any',
      uf: 'AL',
      cref: '956398-G/AL',
      image: '/images/personals/10.png',
      phone: '+62 693 837 9276',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
      shortDescription:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'bd86f1e7-7258-4e97-85d3-c93b9d0ee8d0',
      firstName: 'Belita',
      lastName: 'Crohan',
      fullName: 'Belita Crohan',
      email: 'bcrohan2a@list-manage.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 242.04,
      classGenre: 'Female',
      uf: 'BA',
      cref: '835868-G/BA',
      image: '/images/personals/11.png',
      phone: '+351 171 500 1635',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '83dfda6d-596d-4713-8b80-d92a508e0198',
      firstName: 'Brinn',
      lastName: 'Deme',
      fullName: 'Brinn Deme',
      email: 'bdeme2b@squidoo.com',
      gender: 'Female',
      specialties: ['Health and Wellness'],
      price: 355.59,
      classGenre: 'Female',
      uf: 'AL',
      cref: '312857-G/AL',
      image: '/images/personals/12.png',
      phone: '+30 334 867 0124',
      description:
        'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      shortDescription:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'dc99c69f-7f70-4384-b39e-1fabd9334354',
      firstName: 'Farleigh',
      lastName: 'Kordovani',
      fullName: 'Farleigh Kordovani',
      email: 'fkordovani2c@infoseek.co.jp',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 488.1,
      classGenre: 'Male',
      uf: 'AL',
      cref: '664535-G/AL',
      image: '/images/personals/1.png',
      phone: '+62 250 415 0615',
      description:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      shortDescription:
        'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'dedc0a65-1a1d-414c-9d97-85c65e14862d',
      firstName: 'Borden',
      lastName: 'Babalola',
      fullName: 'Borden Babalola',
      email: 'bbabalola2d@accuweather.com',
      gender: 'Agender',
      specialties: ['Swimming'],
      price: 118.91,
      classGenre: 'Any',
      uf: 'AL',
      cref: '727746-G/AL',
      image: '/images/personals/2.png',
      phone: '+86 630 537 8410',
      description:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
      shortDescription:
        'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '7d78a050-7eb8-4fef-a29e-11cf93a18cb9',
      firstName: 'Dennet',
      lastName: 'Perrelle',
      fullName: 'Dennet Perrelle',
      email: 'dperrelle2e@time.com',
      gender: 'Male',
      specialties: ['Health and Wellness'],
      price: 303.96,
      classGenre: 'Female',
      uf: 'AC',
      cref: '640283-G/AC',
      image: '/images/personals/3.png',
      phone: '+351 125 525 8915',
      description:
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      shortDescription: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '3f470a96-1162-4a36-a1b0-88c3fe7053e2',
      firstName: 'Kerr',
      lastName: 'Deshorts',
      fullName: 'Kerr Deshorts',
      email: 'kdeshorts2f@dailymail.co.uk',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 279.42,
      classGenre: 'Female',
      uf: 'AL',
      cref: '842913-G/AL',
      image: '/images/personals/4.png',
      phone: '+48 385 437 0779',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
      shortDescription:
        'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'f72f3910-cfbc-465b-a565-148484b7b977',
      firstName: 'Carmine',
      lastName: 'Mainstone',
      fullName: 'Carmine Mainstone',
      email: 'cmainstone2g@seattletimes.com',
      gender: 'Male',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 348.84,
      classGenre: 'Male',
      uf: 'AL',
      cref: '000371-G/AL',
      image: '/images/personals/5.png',
      phone: '+502 392 674 3235',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      shortDescription:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'bbe93d92-1966-4ea2-94fb-237e720b3008',
      firstName: 'Eugenio',
      lastName: 'Seddon',
      fullName: 'Eugenio Seddon',
      email: 'eseddon2h@netvibes.com',
      gender: 'Male',
      specialties: ['Third Age'],
      price: 265.43,
      classGenre: 'Female',
      uf: 'AM',
      cref: '538870-G/AM',
      image: '/images/personals/6.png',
      phone: '+380 604 563 1341',
      description:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
      shortDescription:
        'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '9be6a8d5-b43c-46fb-b086-36eca4d93f56',
      firstName: 'Jeffy',
      lastName: 'Djurkovic',
      fullName: 'Jeffy Djurkovic',
      email: 'jdjurkovic2i@npr.org',
      gender: 'Agender',
      specialties: ['Health and Wellness'],
      price: 190.89,
      classGenre: 'Male',
      uf: 'BA',
      cref: '378009-G/BA',
      image: '/images/personals/7.png',
      phone: '+84 903 722 7053',
      description:
        'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      shortDescription: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '47714e27-f58b-4f77-85e4-b4501db2f6bc',
      firstName: 'Antonietta',
      lastName: 'Gillebert',
      fullName: 'Antonietta Gillebert',
      email: 'agillebert2j@telegraph.co.uk',
      gender: 'Female',
      specialties: ['Fitness training'],
      price: 329.59,
      classGenre: 'Any',
      uf: 'AC',
      cref: '462545-G/AC',
      image: '/images/personals/8.png',
      phone: '+62 591 399 6569',
      description:
        'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      shortDescription:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '81b25894-e5ed-4227-b7be-aa52e4015fd0',
      firstName: 'Idell',
      lastName: 'Guyonnet',
      fullName: 'Idell Guyonnet',
      email: 'iguyonnet2k@stanford.edu',
      gender: 'Female',
      specialties: ['Slimming'],
      price: 11.65,
      classGenre: 'Any',
      uf: 'AL',
      cref: '612121-G/AL',
      image: '/images/personals/9.png',
      phone: '+55 780 307 9847',
      description:
        'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
      shortDescription:
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'ab695a77-471f-4cbf-b09c-3fa5b28d3b29',
      firstName: 'Vivi',
      lastName: 'Bathowe',
      fullName: 'Vivi Bathowe',
      email: 'vbathowe2l@oracle.com',
      gender: 'Female',
      specialties: ['Swimming'],
      price: 121.23,
      classGenre: 'Male',
      uf: 'AL',
      cref: '183818-G/AL',
      image: '/images/personals/10.png',
      phone: '+420 955 406 5162',
      description:
        'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      shortDescription:
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '1988a38c-ae05-42aa-9a14-abcfeb8b441f',
      firstName: 'Quintana',
      lastName: 'Archley',
      fullName: 'Quintana Archley',
      email: 'qarchley2m@discuz.net',
      gender: 'Polygender',
      specialties: ['Third Age'],
      price: 319.19,
      classGenre: 'Male',
      uf: 'AC',
      cref: '830505-G/AC',
      image: '/images/personals/11.png',
      phone: '+7 231 407 8319',
      description:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
      shortDescription:
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '358bf8cf-0517-4332-98c0-b4c273b4f69f',
      firstName: 'Timofei',
      lastName: 'Brisson',
      fullName: 'Timofei Brisson',
      email: 'tbrisson2n@wikipedia.org',
      gender: 'Male',
      specialties: ['Slimming'],
      price: 208.18,
      classGenre: 'Any',
      uf: 'BA',
      cref: '826734-G/BA',
      image: '/images/personals/12.png',
      phone: '+351 926 776 2063',
      description:
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      shortDescription:
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: '5720400a-7f08-40c6-a57d-3d5d5801b08b',
      firstName: 'Cara',
      lastName: 'Dyett',
      fullName: 'Cara Dyett',
      email: 'cdyett2o@nhs.uk',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 14.19,
      classGenre: 'Any',
      uf: 'AC',
      cref: '162829-G/AC',
      image: '/images/personals/1.png',
      phone: '+63 523 450 5644',
      description:
        'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
      shortDescription:
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'edd0b3e7-4435-4b14-8c47-8bbb32801545',
      firstName: 'Maddie',
      lastName: 'Hiddersley',
      fullName: 'Maddie Hiddersley',
      email: 'mhiddersley2p@hp.com',
      gender: 'Female',
      specialties: ['Maternal', 'Health and Wellness', 'Fitness training'],
      price: 301.66,
      classGenre: 'Any',
      uf: 'BA',
      cref: '127840-G/BA',
      image: '/images/personals/2.png',
      phone: '+33 629 591 3074',
      description:
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
      shortDescription:
        'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'c0ceb9c5-8d2c-45a7-adb6-5ff5aa5cfd51',
      firstName: 'Sig',
      lastName: 'Withrington',
      fullName: 'Sig Withrington',
      email: 'swithrington2q@toplist.cz',
      gender: 'Male',
      specialties: ['Fitness training'],
      price: 301.05,
      classGenre: 'Female',
      uf: 'BA',
      cref: '188485-G/BA',
      image: '/images/personals/3.png',
      phone: '+242 211 726 2241',
      description:
        'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      shortDescription:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
    {
      id: 'c795bb84-016a-411b-9b63-a09ad5d17148',
      firstName: 'Blondell',
      lastName: 'Olexa',
      fullName: 'Blondell Olexa',
      email: 'bolexa2r@slideshare.net',
      gender: 'Female',
      specialties: ['Fitness training', 'Bodybuilding', 'Health and Wellness'],
      price: 135.91,
      classGenre: 'Male',
      uf: 'AC',
      cref: '693560-G/AC',
      image: '/images/personals/4.png',
      phone: '+47 658 725 1528',
      description:
        'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      shortDescription:
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      photos: [
        {
          image: '/images/personals/1.png',
        },
        {
          image: '/images/personals/2.png',
        },
        {
          image: '/images/personals/3.png',
        },
        {
          image: '/images/personals/4.png',
        },
      ],
    },
  ])

  return {
    personals,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePersonalStore as any, import.meta.hot))
