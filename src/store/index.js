import { createStore } from "vuex";

export default createStore({
  state: {
    panels: [
      {
        id: 1,
        img: "https://plus.unsplash.com/premium_photo-1679815130320-2693569933c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvbGFyJTIwcGFuZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 250,
        title: "Tesla",
        wat: 800,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus neque voluptate? Eaque exercitationem qui eveniet iure labore, ut hic fugit ducimus repellendus fuga illo aspernatur cupiditate sunt itaque unt itaque unt itaque alias.",
        material: "Premium material Obladaet premium   morgenshtern ",
        heightMat: 140,
        widthMat: 45,
        depthMat: 50,
      },
      {
        id: 2,
        img: "https://plus.unsplash.com/premium_photo-1680129601999-5f69462ce0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 500,
        title: "SpaceX",
        wat: 850,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cing elit. cing elit. delectus neque voluptate? Eaque exercitationem qui eveniet iure labore, ut hic fugit ducimus repellendus fuga illo aspernatur cupiditate sunt itaque alias.",
        material: "Xoroshiy material Arut academy   Mb Obladaet and",
        heightMat: 150,
        widthMat: 55,
        depthMat: 80,
      },
      {
        id: 3,
        img: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvbGFyJTIwcGFuZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        price: 800,
        title: "Apple",
        wat: 550,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus neque voluptate? Eaque exercitationem qui eveniet iure labore, ut hic fugit ducimus repellendus fuga illo aspernaturisicing elit. Quod delectus neque voluptate? Eaque exercitationem qui eveniet iure labore, ut hic fugit ducimus repellendus fuga illo aspernatur cupiditate sunt itaque alias.",
        material: "Musor material Macan Litvin   Sasha stoun",
        heightMat: 110,
        widthMat: 25,
        depthMat: 95,
      },
      {
        id: 4,
        img: "https://plus.unsplash.com/premium_photo-1677942035529-db39d2a25915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBwYW5lbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        price: 740,
        title: "Samsung",
        wat: 640,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod delectus neque voluptate? Eaque exercitationem qui eveniet iure labore, ut hic fugit ducimus repellendus fuga illo aspernatur cupiditate sunt itaque alias. electus neque voluptate? Eaque exercitationem qui eveniet iure labore, ut hic fugit ducimus repellendus fuga illo aspernatur cupiditate sunt itaque alias.",
        material: "Norm material egor Kreed   Jony The Limba",
        heightMat: 180,
        widthMat: 75,
        depthMat: 40,
      },
    ],
    // eventpanels: {},
    lang: 2,
    languages: [
      {
        // uz
        header: {
          header_title: "Quyosh Panellari",
          links: ["Bosh sahifa","Biz haqimizda","Mahsulotlar","Maktab","Ariza qoldirish",
          ],
        },
      },

      {
        // en
        header: {
          header_title: "Solar Panels",
          links: ["Main", "About us", "All products", "School", "Feedback"],
        },
      },

      {
        // ru
        header: {
          header_title: "Солнечные Панели",
          links: ["Главная", "О нас", "Все товары", "Школа", "Написать нам"],
        },
      },
    ],
  },
  getters: {
    panels: (state) => state.panels,
    // eventpanels: (state) => state.eventpanels,
  },
  mutations: {
    // EVENT_FUNC_MUTATION(state, id){
    //     for(let p of state.panels){
    //         if(p.id == id){
    //             state.eventpanels = p
    //             console.log(p);
    //         }
    //     }
    // }
  },
  actions: {
    EVENT_FUNC({ commit }, id) {
      commit("EVENT_FUNC_MUTATION", id);
    },
  },
  modules: {},
});
