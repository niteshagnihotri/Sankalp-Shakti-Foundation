module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      fontFamily:{
        QuickSand:["Quicksand", "sans-serif"],
        SourceSans:["Source Sans Pro", "sans-serif"],
        Mont:["'Montserrat', 'sans-serif'"],
        Raleway:["'Raleway', 'sans-serif'"],
        Roboto:["'Roboto', 'sans-serif'"],
        OpenSans:["'Open Sans', 'sans-serif'"],
        Karla:["'Karla', 'sans-serif'"]
      },
      backgroundImage: {
        'green_gradient':'linear-gradient(to right, #af7313, #ab7b0c, #a58206, #9f8a04, #989108, #939608, #8d9a0a, #869f0f, #80a20c, #79a50b, #72a70b, #69aa0d)',
        'red_gradient':'linear-gradient(to right, #cc8514, #c9900b, #c49a05, #bfa505, #b8af0d, #b2b50e, #acbb12, #a4c118, #9dc414, #94c812, #8bcb11, #81ce13)',
        'button_gradient':'linear-gradient(to right top, #b8470f, #c15d1b, #cb7229, #d38538, #dc9949, #e3a74f, #e9b657, #efc45f, #f3d15d, #f4df5c, #f4ed5d, #f2fb5f)',
        'button_gradient1':'linear-gradient(to right top, #b8470f, #c15d1b, #cb7229, #d38538, #dc9949, #dda349, #ddac4b, #dcb64d, #d0b93d, #c1bd2c, #afc11c, #99c509)',
        
      },
    },
  },
  plugins: [],
}
