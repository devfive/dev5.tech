const LOG_STYLE = [
  'background-color: #28251a',
  'font-size: 20px',
  'color: #FFFFFF',
].join(';');

const writeConsoleMessage = () => {
  console.log('%cdev5.tech - thanks for entering my website. I assume that if you looked here you propably are a developer or technical person. Maybe you are interested to checkout my GitHub account?', LOG_STYLE); // eslint-disable-line
  console.log('%chttps://github.com/devfive - my GitHub profile', LOG_STYLE);
  console.log('%chttps://github.com/devfive/dev5.tech - sources of this website', LOG_STYLE);
};

export { writeConsoleMessage };
