export const goToLogin = (history) => {
  history.pushState("/login");
};

export const goToSignUp = (history) => {
  history.pushState("/signup");
};

export const goToFeed = (history) => {
  history.pushState("/");
};

export const goToPost = (history) => {
  history.pushState("/post");
};
