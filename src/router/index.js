import Vue from 'vue'
import Router from 'vue-router'
import GeneralInfo from "@/components/GeneralInfo.vue";
import App from "@/App.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/privacy-policy',
      name: 'Privacy Policty',
      component: GeneralInfo,
      props: {
        infoTitle: "Privacy Policy",
        info: "The materials contained on this website are provided for general information purposes only and do not claim to be or constitute legal or other professional advice and shall not be relied upon as such. We do not accept any responsibility for any loss which may arise from accessing this website nor the reliance on information found on the website. To the fullest extent permitted by the law, we exclude all liability for loss or damages direct or indirect arising from use of this website. Please use common sense and good judgment when accessing any website. This website's content and the products for sale are based upon the programmer’s intuition and the operator’s research and knowledge. You should do your own research and confirm the information with other sources when searching for information regarding statistical data and always review the information carefully with your personal, professional representative and/or advisor(s) before using any of the tools presented or sold on any website. Our qualified support team is constantly engaged in rendering tutorials, marketing services, programming assistance, and similar professional services or advice via this website. However, the information provided is not intended to replace professional or arbitrary advice offered by a licensed marketing consultant or credentialed lawyer. You should not construe sales of our software and services as an endorsement of the views expressed herein, or any warranty or guarantee of any strategy, recommendation, action, or application of advice made by the programmers of each product and/or tool. Simply using these products are no guarantee of any specific result or outcome whatsoever. Individual results may vary dependent on a multitude of factors including, but not limited to, individual stratagem."
      }
    },
    {
        path: '/disclaimer',
        name: 'Disclaimer',
        component: GeneralInfo,
        props: {
            infoTitle: "Disclaimer",
            info: "The materials contained on this website are provided for general information purposes only and do not claim to be or constitute legal or other professional advice and shall not be relied upon as such. We do not accept any responsibility for any loss which may arise from accessing this website nor the reliance on information found on the website. To the fullest extent permitted by the law, we exclude all liability for loss or damages direct or indirect arising from use of this website. Please use common sense and good judgment when accessing any website. This website's content and the products for sale are based upon the programmer’s intuition and the operator’s research and knowledge. You should do your own research and confirm the information with other sources when searching for information regarding statistical data and always review the information carefully with your personal, professional representative and/or advisor(s) before using any of the tools presented or sold on any website. Our qualified support team is constantly engaged in rendering tutorials, marketing services, programming assistance, and similar professional services or advice via this website. However, the information provided is not intended to replace professional or arbitrary advice offered by a licensed marketing consultant or credentialed lawyer. You should not construe sales of our software and services as an endorsement of the views expressed herein, or any warranty or guarantee of any strategy, recommendation, action, or application of advice made by the programmers of each product and/or tool. Simply using these products are no guarantee of any specific result or outcome whatsoever. Individual results may vary dependent on a multitude of factors including, but not limited to, individual stratagem."
          }
      },
      {
        path: '/terms-and-conditions',
        name: 'Terms & Conditions',
        component: GeneralInfo,
        props: {
            infoTitle: "Terms & Conditions",
            info: "The materials contained on this website are provided for general information purposes only and do not claim to be or constitute legal or other professional advice and shall not be relied upon as such. We do not accept any responsibility for any loss which may arise from accessing this website nor the reliance on information found on the website. To the fullest extent permitted by the law, we exclude all liability for loss or damages direct or indirect arising from use of this website. Please use common sense and good judgment when accessing any website. This website's content and the products for sale are based upon the programmer’s intuition and the operator’s research and knowledge. You should do your own research and confirm the information with other sources when searching for information regarding statistical data and always review the information carefully with your personal, professional representative and/or advisor(s) before using any of the tools presented or sold on any website. Our qualified support team is constantly engaged in rendering tutorials, marketing services, programming assistance, and similar professional services or advice via this website. However, the information provided is not intended to replace professional or arbitrary advice offered by a licensed marketing consultant or credentialed lawyer. You should not construe sales of our software and services as an endorsement of the views expressed herein, or any warranty or guarantee of any strategy, recommendation, action, or application of advice made by the programmers of each product and/or tool. Simply using these products are no guarantee of any specific result or outcome whatsoever. Individual results may vary dependent on a multitude of factors including, but not limited to, individual stratagem."
          }
      },
      {
        path: '/',
        name: 'Product',
        meta: {
          title: 'Misbah Shah - Lazat-e-ghum',
        },
        component: App
      }
  ]
})