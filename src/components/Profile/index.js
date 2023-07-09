
import e_commerce from '../../Assets/e_commerce.png';
import Recipe_App from '../../Assets/Recipe_App.png';

const data = {
    info: {
        name: 'Tesfaye Hailu',
        short_description: 'Hi, I\'m Tesfaye Hailu.',
        
        
        description: "<h3>I'm a certified full stack web developer, <br> <code>HTML</code> , <code>CSS</code> , <code>JavaScript</code> , <code>React Js</code> , <code>Express JS</code> , <code>MongoDB</code> , and many more...</h3>",
        email: 'tes.girmah@gmail.com',
        phone_no: '206 423 1806',
    },

    social: {
        
        linkedin: 'https://www.linkedin.com/in/tesfaye-hailu-a266a5271'
        
    },

    portfolioCategories: [
        'Web Development',
        'App Development',
    ],

    portfolios: [
        {
            id: 1,
            category: 'App Development',
            title: "Recipe App ",
            image: Recipe_App,
            link:'https://tesfaye-hailu.github.io/Mod1_Project_ReceipeApp/'
            
            
        },
        {
            id: 2,
            category: 'Web Development',
            title: 'Online Store - Ecommerce market Place',
            image: e_commerce,
            link: 'https://tesfaye-hailu.github.io/Mod2_Project/'

        },
        {
            id: 3,
            category: 'Web Development',
            title: "School Registration System",
            
        },
        
    ]
}

export default data;