import "./technologies.css";
const Technologies = () => {
  return (
    <div className="technologies__container" id="navigation">
      <h1 data-aos="fade-right">Tech Stack</h1>
      <div data-aos="fade-left" className="tech__icons">
        <div className="first__row">
          <div className="image__container">
            <img
              src="https://www.ujudebug.com/wp-content/uploads/2022/07/html-logo-transparent.png"
              alt=""
            />
          </div>
          <div className="image__container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
              alt=""
            />
          </div>
          <div className="image__container">
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              alt=""
            />
          </div>
        </div>
        <div className="second__row">
          <div className="image__container">
            <img
              src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
              alt=""
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="image__container">
            <img
              src="https://repository-images.githubusercontent.com/377044244/dbf0fe00-cd6f-11eb-9e1e-b8b1031c0b6a"
              alt=""
              style={{ borderRadius: 30 }}
            />
          </div>
          <div className="image__container">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABZVBMVEUWGB3/zAD/pwD/iggAAB7ZbhUAAAD/zgD/0gD/qQD/iAj/0AD/1AAUFx3/qwAVFx3/hQgACR4LEx0ADh7ichQABR7svQhEMRqaZhPllgdmRhgAEx0EER2WeRX/lwT7yAN8ZReggRT5//8AACQODhMAAAjtmwa/fg6vcxDXjQqAVhZ6QhpFKhxPOBnUbBWsWRg7JhxKPhseHByDRhlqVxg3KRu3Xhc6MRtOLxu3eQ/esQrTqg2+mA+xjhHufQ/eeRP5vgWJbxbzsAktIxv/ngVXSBr/kwf/uQNgTxmqiRJuSxeLVxV5YhhASE82MCyJprj07unExcYnJSvS2dk4EwS81eaYfWK8rJqmrq0SAACZo696ZFIxSV2pnpTKwrphT0JZa3sUKTp4jZrf8f84XXj/+uuKa0iVt8rSuaPx4M9aNB4APVqLeWwrAAAAGS9YPCoAADFmWlsvWXWKkZCMgn1kcnuempl8Kv9UAAAExklEQVR4nO3c/W/TRhgHcNu52LETu7WdQGnThKZOWl7aMUaBMcbLCGUwGGSQNoUVSssGZd26Dujfv/PZ5yRunHjSJCfy9yNRGfWX01fPvTx3UgUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgv7OspEcwOazZ00grLnumQZIew8QoLRnLSCsmckY1Zu2kRzEZdFuiBCxbcVinDUlSzwUTcU5PcjRjzj5Pw5KMGT+tuQsXkVYkc9kNSzJWyuy/9upXWL8ikXOqG5bUMN2KmrtQLF4KSgsLWQhpsKwkY8mdiPZqNnuVl1bpa6TVR79sSH5a502h/E0xmy1e9DIqXani/NWnPMvDkow1ay7rumqy31xTCtdQWr3smSAstUHcwqKldZ1mZNlVJTdfSnp8Y4UsqVJQWt+uZr3SsgWd3MiL+e8wD3vRZicIS2oWvbCKHy1yMyeKYp5MJT3AcUKMblaSlsn6pUXmCzQrsXAFh64u1uxwFS2jeROxOMOyEvPfYx52ec1OUFiZzC0W1u28wsJSTiGsLr/Z4YVFsWWr6mUlirk1HB4CvNnhhUXRrO7wrMTcXTPpIY4PEkSlVvywbq3+kOdZ4fDQw7pnhAsro0m5ICtRqRLc2Pi6zY667oelNbt15R4e7peTHuS4MLvNDs9qXenNSsw9xDz0Bc0OLywtI/aHpdxAWD5yJlRY03f6s6KlJWDRYnQrtGJNP8iL4bDOouNhgman6WdlnMhKzN/EPGR4s+MXVmgjDA4PSQ9zPJSW1Z7C0tYHZEUPD7iJZ/xmxyusExshX7QWUFou0rtiaSc2Qn/RQsfj8l92vMKafjA4K1FRyjg80GbnkREU1qCNkC9auC4VeLOjRm6EfB7iulTgzY5bWFolOitclzLs5V4dshHyeYi3VmGKveywwqoOy0rM3cVbq7VieIUVuRHyRQuHB6/ZoYU1ZCP0Fy0Rb62s2aF1JY3Iii5aP6b+utRtdpra0I2QL1q4LnWbnVEboT8PU394sNYMqaKN2Aj5PLyc8o7HbXYGXCMPnodpf2ulzU5l5EboS/11KW12YmyEHqWa8sMDaVRibIS+wv1Udzy6Ja3HWq+YlF+XWivNWBuhPw/T/dZq/xRvI+SllerDg/1YycVOSymcSvcbj2kviPHiolGdJanOii7xJFZcLCoz3ScHl05Ko+JCVF06IQvV6LgQVT+dmFFx0agek5Q3hWERk9GLClUVRifjfKi6EFW0UFyYgMP1xIWoRvPjYlHZmICjsLjcqJIeyGSgp3pEFV+aLxfg/xes5w4qaxiZcvjsc578jLSiyU+ftVq/PH8hy5Yj1+X2hmwJ9EOnIVpCXa4nPb6xIj/dlGXS2XrZefVra1tuv269kXfox9sO/dhtvUJaPdzK2jZrW3sHi7Xr7Y325rvf5NaL9u/vP+xsv9tfrOHPafVwK0tYpGF9/KPWah3QaVj7s/16b+OvzvMDd4Yepvw+uU8Q1qFZO3h52P6wu/937Whv4/3m7v4/z550tlBZXc7OkSOQT1u7l5y3x5/lL5+P78k7x1+OzE/s4w0Kq5fj0B91ne5/Tr2uu//cD2fK+3CSHh4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEycfwGjgXti77fZHAAAAABJRU5ErkJggg=="
              alt=""
              style={{ borderRadius: 30 }}
            />
          </div>
        </div>
        <div className="third__row">
          <div className="image__container">
            <img
              src="https://softprodigy.com/wp-content/uploads/2019/06/nodejs-logo.png"
              alt=""
            />
          </div>
          <div className="image__container">
            <img
              src="https://camo.githubusercontent.com/23c0b44b85450457ebe782b2a867a45f8bd6b5036995fa86aa59c3953413864d/68747470733a2f2f65787465726e616c2d636f6e74656e742e6475636b6475636b676f2e636f6d2f69752f3f753d687474707325334125324625324663616d6f2e716969746175736572636f6e74656e742e636f6d253246373466333761646265326366333032656464386234613733306136343938646265633764613435392532463638373437343730373333613266326637313639363937343631326436393664363136373635326437333734366637323635326537333333326536313664363137613666366536313737373332653633366636643266333032663331333233323331333433323266333833303339333833303339333333393264333033393636363132643631333133333333326433353332333133343264363336313335363536363635333736323339333733373333326537303665363726663d31266e6f66623d31"
              alt=""
            />
          </div>
          <div className="image__container">
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--Cgc-AJ55--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/uk0uq2vb0zlmw9h77oh3.png"
              alt=""
              style={{
                objectFit: "contain",
                height: 100,
                width: 70,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
//

// react js::
