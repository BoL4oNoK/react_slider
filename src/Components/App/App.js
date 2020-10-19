import React from 'react';
import ReactSlider from '../ReactSlider/ReactSlider';
import './App.scss';

const sliderData = [
  {
    id: 1,
    title: 'slide 1',
    image: {
      src: 'images/iceland-1979445_1920.jpg',
      alt: 'White fox by David Mark',
    },
    description: '',
  },
  {
    id: 2,
    title: 'slide 2',
    image: {
      src: 'images/yellowstone-national-park-1581879_1920.jpg',
      alt: 'Yellowstone national park by David Mark',
    },
    description: 'Best park in USA',
  },
  {
    id: 3,
    title: 'slide 3',
    image: {
      src: 'images/sunset-1373171_1920.jpg',
      alt: 'Cindy Lever',
    },
    description: '',
  },
  {
    id: 4,
    title: 'slide 4',
    image: {
      src: 'images/road-1072823_1920.jpg',
      alt: 'Valiphotos',
    },
    description: '',
  },
];

function App() {
  return (
    <div className="App">
      <pre>
        {`
          <ReactSlider slidesData={sliderData} options={{ slideNavigation: true, slidesPerView: 2 }} />
        `}
      </pre>
      <ReactSlider
        slidesData={sliderData}
        options={{ slidesPerView: 2 }}
      />
      <hr />
      <pre>
        {`
          <ReactSlider slidesData={sliderData} options={{ carouselMode: true, slideNavigation: true }} />
        `}
      </pre>
      <ReactSlider className="test" id="test" slidesData={sliderData} options={{ autoPlay: true, carouselMode: true, slideNavigation: true }} />
      <hr />
      <pre>
        {`
          <ReactSlider slidesData={sliderData} options={{ slideNavigation: true }}>
            <img className="images" src="images/iceland-1979445_1920.jpg" alt="White fox by David Mark" />
            <img className="images" src="images/road-1072823_1920.jpg" alt="Valiphotos" />
          </ReactSlider>
        `}
      </pre>
      <ReactSlider slidesData={sliderData} options={{ slideNavigation: true }}>
        <img className="images" src="images/iceland-1979445_1920.jpg" alt="White fox by David Mark" />
        <img className="images" src="images/road-1072823_1920.jpg" alt="Valiphotos" />
      </ReactSlider>
    </div>
  );
}

export default App;
