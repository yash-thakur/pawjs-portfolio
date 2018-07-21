import React, {Component} from "react";
import _ from "lodash";
import BlogSingle from "../blog-single/blog-single";
import authorsList from "../portfolios/authorsList";

import Prism from "../prism/prism";

import SliderImg from "../../../resources/images/blog/09.jpg";

import BannerImg from "../../../resources/images/bg/01.jpg";
export default class TemperatureSensorRaspberryPi extends Component {
  render() {
    return(
      <BlogSingle
        title="Temperature Sensor Using Arduino And RaspberryPi"
        bannerImg={BannerImg}
        author={_.get(authorsList, "authors.yash_thakur", {})}
        sliderImgs={[
          SliderImg,
          SliderImg,
          SliderImg
        ]}
      >
        <div>
          <p>Here we will connect an LM35 temperature sensor to Arduino and use its readings in RaspberryPi to monitor the
            temperature and send an email alert if the temperature is above 100. This can be used for safety as well as many
            places to get alerts of temperature variation.
          </p>
          <h3>Hardware&nbsp;used:</h3>
          <ul>
            <li>Arduino Uno</li>
            <li>Raspberry Pi</li>
            <li>Jumper Cables</li>
            <li>Bread Board</li>
            <li>LM35 (Temperature Sensor)</li>
            <li>USB cable ( connecting Arduino to Raspberry Pi&nbsp;)</li>
          </ul>
          <h2>Steps :</h2>
          <ol>
            <li>Connect Arduino to Arduino IDE and upload the below code to it.</li>
            <li>Connect your RaspberryPi and make a new file in terminal and write the below python code to it.</li>
            <li>Edit your username and passwords to it. (Note: If you are using Gmail kindly go to settings and allow
              less secure apps.
            </li>
            <li>Connect Arduino Uno to RaspberryPi using the USB cable.
              <a href="http://yashthakur.in/wp-content/uploads/2017/03/raspberrypi-arduino.jpg">
                <img
                  className="aligncenter size-full"
                  src="http://yashthakur.in/wp-content/uploads/2017/03/raspberrypi-arduino.jpg"
                  alt="Connection of RaspberryPi and Arduino" width="620" height="465"
                />
              </a>
            </li>
            <li>Run the python code in RaspberryPi.</li>
            <li>If the temperature is above 100 degrees Celcius&nbsp;an Email alert will be sent to the receiver.</li>
          </ol>
          <p>Arduino code:</p>
          <Prism language="python" code={`char dataString[50] = {0};
int val;
int tempPin = 1;
void setup() {
  Serial.begin(9600);              //Starting serial communication
}
void loop() {
  val = analogRead(tempPin);
  float mv = ( val/1024.0)*5000;
  float cel = mv/10;
  int cel1=(int)cel;
  sprintf(dataString,"%02X",cel1); // convert a value to hexa
  Serial.println(dataString);   // send the data
  delay(30000);                  // give the loop some break
}`}/>
          <p>RaspberryPi code:</p>
          <Prism language="python" code={`import serial
import smtplib
ser = serial.Serial('/dev/ttyACM0',9600)
s = [0]
while True:
  read_serial=ser.readline()
  temp = int (ser.readline(),16)
  s[0] = str(temp)
  print s[0]
  if temp > 100:
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login("Sender Mail", "password")
    msg =s[0]+ "C Temperature Above Limit! Kindly Pay Attention!!!"
    server.sendmail("Sender Mail", "Receiver Mail", msg)
    server.quit()
  else:
    print "Safe"`}/>
        </div>
      
      </BlogSingle>
    );
  }
}
