export const obj = [
  {
    id: 1,
    author: "Zokir",
    date: "20-12-2022",
    title: "Map data sturucture",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium laboriosam magni architecto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium laboriosam magni architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium laboriosam magni architecto.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium laboriosam magni architecto.",
    image: "https://murotov.netlify.app/assets/images/zokirjpg.jpg",
  },
  {
    id: 2,
    author: "Zokir2",
    date: "20-12-2022",
    title: "Set data sturucture",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium laboriosam magni architecto.",
    image: "https://static.tildacdn.com/tild3263-3831-4535-a636-346664376264/photo_2023-06-06_132.jpeg",
  },
  {
    id: 3,
    author: "Zokir3",
    date: "20-12-2022",
    title: "WeakMap data sturucture",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil accusantium laboriosam magni architecto.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti excepturi tenetur quas possimus rerum reiciendis quae nostrum impedit obcaecati. Saepe quas tenetur velit vero dicta quod culpa eligendi omnis minus, id nisi harum nobis temporibus deserunt, est repudiandae facere modi a rem eos! Odit aspernatur modi alias, voluptatem vero dolorem recusandae in quia rerum? Aliquam a consequatur quam explicabo commodi corrupti magni nostrum odit excepturi? Ducimus sequi reprehenderit quis esse obcaecati quas? Laboriosam voluptas laudantium adipisci id unde, eos magnam at asperiores cupiditate aperiam et dolore aliquam illum error incidunt natus corporis tenetur dolorem provident mollitia quaerat obcaecati exercitationem. Quod provident accusantium commodi ratione. Natus optio eveniet libero, reprehenderit quae, quo at deserunt error fuga nulla nobis dignissimos est aut magnam mollitia ad temporibus magni aperiam perspiciatis, dolores expedita sunt.",
    image: "https://murotov.netlify.app/assets/images/zokirjpg.jpg",
  },
];

export function getAllData() {
  return obj;
}

export function getDataById(id: number) {
  return obj.find((item) => item.id === id);
}
