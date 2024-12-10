import { getApiUrl } from "../utils/CommonHooks";
import { URLS } from "./Urls";

export const ApiServices = {
  Register: async (data: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.REGISTER), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  UserLogin: async (data: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.LOGIN), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  BookRequest: async (data: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.BOOK_REQUEST), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  ForgotPassswordEmail: async (data: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.FORGOT_PASSWORD_EMAIL), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },
  ChangePassword: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: params.data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.CHANGE_PASSWORD), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  EditProfile: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "PUT",
      headers: myHeaders,
      body: params.data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.PROFILE), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },


  AddToCartItem: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: params.data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.Add_CART_ITEM), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },


  UpdateCartItem: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "PUT",
      headers: myHeaders,
      body: params.data,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.UPDATE_CART_ITEM +`/${params?.id}`), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  DeleteCartItem: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params?.token);


    let requestOptions: any = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.DELETE_CART_ITEM +`/${params?.id}`), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  SaveAddress: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params?.token);
    console.log("params", params);
    let url = params?.id
      ? getApiUrl(URLS.ADDRESSES + `/${params?.id}`)
      : getApiUrl(URLS.ADDRESSES);
    console.log("UrlsEdit", url);

    let requestOptions: any = {
      method: params?.id ? "PUT" : "POST",
      headers: myHeaders,
      body: params.data,
      redirect: "follow",
    };
    try {
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  SaveWishlist: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params?.token);
    console.log("params", params);
    let url = getApiUrl(URLS.WISHLIST);
    console.log("UrlsEdit", url);

    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      body: params.data,
      redirect: "follow",
    };
    try {
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },


  GetWishlist: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params?.token);
    let url = getApiUrl(URLS.WISHLIST);
    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  GetOrderCart: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params?.token);
    let url = getApiUrl(URLS.GET_ORDER_CART);
    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  DeleteWishlist: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer " + params?.token);

    let requestOptions: any = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.WISHLIST + `/${params?.id}`), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  GetAddress: async (token: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.ADDRESSES), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  GetProfile: async (token: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.PROFILE), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  DeleteAccount: async (token: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions: any = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.DELETE_ACCOUNT), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },
  GetHighDiscountCategories: async ( callback: any) => {
    let requestOptions: any = {
      method: "GET",
      redirect: "follow",
    };
    try {
      fetch(getApiUrl(URLS.HIGH_DISCOUNT_CATEGORIES), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },
  GetHome: async (token: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    let requestOptions: any = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      fetch(getApiUrl(URLS.HOME), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  GetBookDetail: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params?.token);
    let requestOptions: any = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };
    try {
      fetch(getApiUrl(URLS.BOOK_DETAIL + `/${params?.id}`), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  DeleteAddresses: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);
    let requestOptions: any = {
      method: "DELETE",
      headers: myHeaders,

      redirect: "follow",
    };

    try {
      fetch(getApiUrl(URLS.ADDRESSES + `/${params?.id}`), requestOptions)
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  BookCategorySearch: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);
    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(
        getApiUrl(
          URLS.BOOK_SEARCH +
            `?keyword=${params.search}&page=${params.page}&isbn`
        ),
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  BookSearch: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,

    };
   
    try {
      fetch(
        getApiUrl(
          URLS.BOOK_SEARCH + `?keyword=${params.search}&page=${params.page}`
        ),
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  BookByCategory: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);
    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      fetch(
        getApiUrl(
          URLS.BOOK_BY_CATEGORY +
            `/${params.id}/A/${params?.sort}?page=${params.page}`
        ),
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  HighDiscountBooks: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);
    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
   
    try {
      fetch(
        getApiUrl(
          URLS.High_DISCOUNT +
            `/${params?.id}/${params?.sort}?page=${params.page}`
        ),
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },

  GetAdvanceSearch: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,

    };
    try {
      fetch(
        getApiUrl(
          URLS.ADVANCE_SEARCH +
            `?title=${params?.title}&author=${params?.author}&isbn=${params?.isbn}&category=${params?.category}&publisher=${params?.publisher}&publication_year=${params?.publication_year}&Book_Language=${params?.Book_Language}&PAK_PRICE=${params?.PAK_PRICE}&keyword=${params?.keyword}&Bind_IND=${params?.Bind_IND}&page=${params?.page}`
        ),
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },
  BookBySubCategory: async (params: any, callback: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + params.token);

    let requestOptions: any = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let url = params?.highDiscountParam
    ? getApiUrl(URLS.BOOK_BY_SUB_CATEGORY + `/${params.id}/HD/${params?.sort}?page=${params.page}`)
    :  getApiUrl(
      URLS.BOOK_BY_SUB_CATEGORY +
        `/${params.id}/A/${params?.sort}?page=${params.page}`
    );
  console.log("UrlsEdit", url);

  //   console.log("SelectedSort", getApiUrl(
  //     URLS.BOOK_BY_SUB_CATEGORY +
  //       `/${params.id}/A${params?.sort}?page=${params.page}`
  //   ),)
   

    try {
      fetch(
        url,
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => callback({ isSuccess: true, response: result }))
        .catch((error) => callback({ isSuccess: false, response: error }));
    } catch (error) {
      return { isSuccess: false, error: error };
    }
  },
};
