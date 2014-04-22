var info = {
    markers: {
        me: null,
        points: [],
        route: null
    },
    
    shapes: [],
    
    places: [
        {
            name: 'Restaurant',
            markers: [
                {
                    latlng: new google.maps.LatLng(11.008216, -74.817706),
                    name: 'Zushi Zone',
                    description: 'Chinese Food!',
                    image: 'res/images/cache/places/img1.jpg',
                    punctuation: 4.5
                }, {
                    latlng: new google.maps.LatLng(11.007689, -74.817277),
                    name: 'Habana Blue',
                    description: '',
                    image: 'res/images/cache/places/img5.jpg',
                    punctuation: 4
                }, {
                    latlng: new google.maps.LatLng(11.006699, -74.812964),
                    name: 'Rodizio',
                    description: 'Rodízio is an all-you-can-eat style of restaurant service in Brazilian restaurants.',
                    image: 'res/images/cache/places/img4.jpg',
                    punctuation: 4
                }, {
                    latlng: new google.maps.LatLng(11.006152, -74.826482),
                    name: 'Arabe Internacional',
                    description: 'The best restaurant for arabian food that I met in Barranquilla.',
                    image: 'res/images/cache/places/img3.jpg',
                    punctuation: 4.22
                }, {
                    latlng: new google.maps.LatLng(11.001328, -74.817749),
                    name: 'Quile Parrilla',
                    description: 'Enjoy the best argentine grill in the city!',
                    image: 'res/images/cache/places/img2.jpg',
                    punctuation: 4.3
                }
            ]
        }, {
            name: 'Hotels',
            markers: []
        }, {
            name: 'Malls',
            markers: []
        }, {
            name: 'Hospitals',
            markers: []
        }, {
            name: 'Discos',
            markers: []
        }, {
            name: 'Parks',
            markers: []
        }, {
            name: 'Museums',
            markers: []
        }, {
            name: 'Colleges',
            markers: []
        }, {
            name: 'Cinemas',
            markers: []
        }, {
            name: 'Pet Care',
            markers: []
        }, {
            name: 'Teathers',
            markers: []
        }, {
            name: 'Fuels',
            markers: []
        }, {
            name: 'Drugstores',
            markers: []
        }, {
            name: 'Strip Clubs',
            markers: []
        }
    ],
    
    danger: [
        {
            latlng: new google.maps.LatLng(10.967520, -74.775138),
            radius: 550,
            punctuation: 4.5,
            name: 'Los tres postes',
            image: 'res/images/cache/danger/img1.jpg',
            description: 'This is a dangerous zone!',
            comments: []
        }
    ],
    
    routes: [
        {
            name: 'Kra 54 Uninorte',
            company: 'Sobusa',
            route: [
                new google.maps.LatLng(10.950586, -74.773801),
                new google.maps.LatLng(10.957201, -74.774337),
                new google.maps.LatLng(10.964911, -74.775238),
                new google.maps.LatLng(10.967649, -74.774766),
                new google.maps.LatLng(10.970725, -74.774423),
                new google.maps.LatLng(10.975359, -74.775324),
                new google.maps.LatLng(10.978087, -74.781804),
                new google.maps.LatLng(10.984907, -74.780206),
                new google.maps.LatLng(10.986445, -74.785206),
                new google.maps.LatLng(10.987709, -74.789808),
                new google.maps.LatLng(10.988820, -74.789492),
                new google.maps.LatLng(10.990763, -74.789111),
                new google.maps.LatLng(10.992701, -74.789288),
                new google.maps.LatLng(10.992917, -74.791734),
                new google.maps.LatLng(10.995666, -74.794325),
                new google.maps.LatLng(10.995829, -74.794979),
                new google.maps.LatLng(10.997193, -74.797501),
                new google.maps.LatLng(10.998583, -74.801047),
                new google.maps.LatLng(10.999046, -74.801621),
                new google.maps.LatLng(11.001879, -74.803745),
                new google.maps.LatLng(11.003195, -74.804970),
                new google.maps.LatLng(11.004280, -74.808049),
                new google.maps.LatLng(11.005228, -74.810527),
                new google.maps.LatLng(11.005207, -74.811321),
                new google.maps.LatLng(11.005338, -74.811482),
                new google.maps.LatLng(11.005559, -74.811563),
                new google.maps.LatLng(11.007850, -74.817153),
                new google.maps.LatLng(11.008808, -74.818129),
                new google.maps.LatLng(11.010241, -74.818923),
                new google.maps.LatLng(11.011610, -74.820843),
                new google.maps.LatLng(11.012500, -74.822662),
                new google.maps.LatLng(11.012605, -74.823338),
                new google.maps.LatLng(11.013858, -74.826449),
                new google.maps.LatLng(11.011183, -74.828343),
                new google.maps.LatLng(11.011141, -74.828756),
                new google.maps.LatLng(11.011404, -74.829582),
                new google.maps.LatLng(11.011941, -74.831985),
                new google.maps.LatLng(11.013121, -74.834109),
                new google.maps.LatLng(11.014358, -74.836057),
                new google.maps.LatLng(11.015833, -74.838793),
                new google.maps.LatLng(11.016496, -74.840954),
                new google.maps.LatLng(11.016559, -74.847344),
                new google.maps.LatLng(11.017570, -74.851936),
                new google.maps.LatLng(11.016980, -74.859403),
                new google.maps.LatLng(11.017822, -74.860948)
            ]
        }, {
            name: 'Carrera 14/15',
            company: 'Sobusa',
            route: []
        }, {
            name: 'Calle 72',
            company: 'Sobusa',
            route: []
        }, {
            name: 'Coolitoral Via 40',
            company: 'Coolitoral',
            route: []
        }, {
            name: 'Coolitoral Circunvalar',
            company: 'Coolitoral',
            route: []
        }
    ],
    
    information: [
        {
            title: 'How to recognize fake money',
            image: 'res/images/cache/news/img1.jpg',
            abbr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipiscing ac odio et consectetur.',
            date: '2014-04-20',
            author: 'Edinson Salas',
            news: '<p>                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.            </p>            <p>                Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.            </p>            <p>                Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, sed placerat ipsum urna sed risus. In convallis tellus a mauris. Curabitur non elit ut libero tristique sodales. Mauris a lacus. Donec mattis semper leo. In hac habitasse platea dictumst. Vivamus facilisis diam at odio. Mauris dictum, nisi eget consequat elementum, lacus ligula molestie metus, non feugiat orci magna ac sem. Donec turpis. Donec vitae metus. Morbi tristique neque eu mauris. Quisque gravida ipsum non sapien. Proin turpis lacus, scelerisque vitae, elementum at, lobortis ac, quam. Aliquam dictum eleifend risus. In hac habitasse platea dictumst. Etiam sit amet diam. Suspendisse odio. Suspendisse nunc. In semper bibendum libero.            </p>            <p>                Proin nonummy, lacus eget pulvinar lacinia, pede felis dignissim leo, vitae tristique magna lacus sit amet eros. Nullam ornare. Praesent odio ligula, dapibus sed, tincidunt eget, dictum ac, nibh. Nam quis lacus. Nunc eleifend molestie velit. Morbi lobortis quam eu velit. Donec euismod vestibulum massa. Donec non lectus. Aliquam commodo lacus sit amet nulla. Cras dignissim elit et augue. Nullam non diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Aenean vestibulum. Sed lobortis elit quis lectus. Nunc sed lacus at augue bibendum dapibus.            </p>'
        }, {
            title: 'A great plan for the weekend',
            image: 'res/images/cache/news/img2.jpg',
            abbr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipiscing ac odio et consectetur.',
            date: '',
            author: '',
            news: ''
        }, {
            title: 'How to avoid lose your baggage',
            image: 'res/images/cache/news/img3.jpg',
            abbr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipiscing ac odio et consectetur.',
            date: '',
            author: '',
            news: ''
        }
    ]
};