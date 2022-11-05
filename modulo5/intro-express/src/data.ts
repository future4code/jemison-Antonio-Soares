

type Users ={
  id: number,
  nome: string,
  telefone:number,
  email:string,
  website:string

}

type Posts ={
  id: number,
  title: string,
  body:string,
  userId:number
  

}

export const todosUsuarios :Users[] = 
[
    
      {
        id: 1,
        nome: "Leanne Graham",
        telefone:1-770-736-8031-56442,
        website: "hildegard.org",
        email: "Sincero@april.biz",
      },
      {
        id: 2,
        nome: "Ervin Howell",
        telefone:692-65939125,
        website: "anastasia.net",
        email: "Shanna@melissa.tv"
      },
      {
        id: 3,
        nome: "Clementine Bauch",
        telefone:1-463-123-4447,
        website: "ramiro.info",
        email: "Nathan@yesenia.net"
      },
      {
        id: 4,
        nome: "Patrícia Lebsack",
        telefone: 493-170-9623-156,
        website: "kale.biz",
        email: "Julianne.OConner@kory.org"
      },
      {
        id: 5,
        nome: "Chelsey Dietrich",
        telefone: 254-954-1289,
        website: "demarco.info",
        email: "Lucio_Hettinger@annie.ca"
      },
    
    

  ]



  export const todosPosts :Posts[] =  [
    {
     userId: 1,
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      userId: 2,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      userId: 2,
      id: 14,
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
      userId: 2,
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
      userId: 2,
      id: 16,
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
      userId: 3,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      userId: 3,
      id: 26,
      title: "est et quae odit qui non",
      body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
    },
    {
      userId: 3,
      id: 27,
      title: "quasi id et eos tenetur aut quo autem",
      body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
    },
    {
      userId: 3,
      id: 28,
      title: "delectus ullam et corporis nulla voluptas sequi",
      body: "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
    },
    {
      userId: 4,
      id: 4,
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      userId: 4,
      id: 38,
      title: "explicabo et eos deleniti nostrum ab id repellendus",
      body: "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
    },
    {
      userId: 4,
      id: 39,
      title: "eos dolorem iste accusantium est eaque quam",
      body: "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
    },
    {
      userId: 4,
      id: 40,
    title: "enim quo cumque",
      body: "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
    },
  
    {
      userId: 5,
      id: 5,
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      userId: 5,
      id: 48,
      title: "ut voluptatem illum ea doloribus itaque eos",
      body: "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
    },
    {
      userId: 5,
      id: 49,
      title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
      body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
    },
    {
      userId: 5,
      id: 50,
      title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
      body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    },

  
  ]