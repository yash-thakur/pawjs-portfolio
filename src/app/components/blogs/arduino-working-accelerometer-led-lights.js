import React, {Component} from "react";
import _ from "lodash";
import authorsList from "../portfolios/authorsList";
import BlogSingle from "../blog-single/blog-single";

import Prism from "../prism/prism";

import ArduinoImg from "./images/adxl335.png";

export default class ArduinoAccelerometer extends Component {
  render() {
    return (
      <BlogSingle
        title="Temperature Sensor Using Arduino And RaspberryPi"
        author={_.get(authorsList, "authors.yash_thakur", {})}
        sliderImgs={[]}
      >
        <div>
          <img className="img-fluid" src={ArduinoImg}/>
          <p className="pt-5">
            The code mentioned below is an Arduino code which was compiled by me to get an accelerometer to
            blink the LED’s on and off based on the position of the accelerometer. The accelerometer is connected to
            Arduino according to the below configuration, and the LED’s are connected to Arduino’s pins. The below code
            turns the leds on based on the direction in which the accelerometer is tilted. Probably the following can be
            easily copied to Arduino code builder and uploaded to the Arduino Uno. You can check the axis readings from
            the monitor.<br/>The connections to the arduino are as follows:
          </p>
          <h2>Hardware Required:</h2>
          <ul>
            <li>Arduino or Genuino Board</li>
            <li><span className="wikiword">ADXL3xx</span> Accelerometer</li>
            <li>4 LED</li>
            <li>Jumper wires to connect the circuit</li>
          </ul>
          <h2>The circuit:</h2>
          <p>analog 0: accelerometer self test<br/>
            analog 1: z-axis<br/>
            analog 2: y-axis<br/>
            analog 3: x-axis<br/>
            analog 4: ground<br/>
            analog 5: vcc</p>
          <p>Pin2:LED1<br/>
            Pin3:LED2<br/>
            Pin4:LED3<br/>
            Pin5:LED4<br/>
            GND:To all Led’s</p>
          <h2>The Code :</h2>
          <Prism language="python" code={`
//This example code is in the public domain.

// these constants describe the pins. They won’t change:
const int groundpin = 18; // analog input pin 4 — ground
const int powerpin = 19; // analog input pin 5 — voltage
const int xpin = A3; // x-axis of the accelerometer
const int ypin = A2; // y-axis
const int zpin = A1; // z-axis (only on 3-axis models)
int led1=2; // Pin numbers to arduino
int led2=3;
int led3=4;
int led4=5;
int valx=0;
int valy=0;
int valz=0;

void setup() {
  // initialize the serial communications:
  Serial.begin(9600);
  
  // Provide ground and power by using the analog inputs as normal
  // digital pins. This makes it possible to directly connect the
  // breakout board to the Arduino. If you use the normal 5V and
  // GND pins on the Arduino, you can remove these lines.
  pinMode(groundpin, OUTPUT);
  pinMode(powerpin, OUTPUT);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);
  pinMode(led4, OUTPUT);
  digitalWrite(groundpin, LOW);
  digitalWrite(powerpin, HIGH);
}

void loop() {
  
  // print the sensor values:
  valx=analogRead(xpin);
  valy=analogRead(ypin);
  valz=analogRead(zpin);
  
  if(valz<=290)
    digitalWrite(led1, HIGH); // turn the LED on (HIGH is the voltage level)
  else
    digitalWrite(led1, LOW); // turn the LED off by making the voltage LOW
  if(valz>=380)
    digitalWrite(led2, HIGH); // turn the LED on (HIGH is the voltage level)
  else
    digitalWrite(led2, LOW); // turn the LED off by making the voltage LOW
  if(valy<=290)
    digitalWrite(led3, HIGH); // turn the LED on (HIGH is the voltage level)
  else
    digitalWrite(led3, LOW); // turn the LED off by making the voltage LOW
  if(valz>=380)
    digitalWrite(led4, HIGH); // turn the LED on (HIGH is the voltage level)
  else
    digitalWrite(led4, LOW); // turn the LED off by making the voltage LOW
  
  Serial.print(analogRead(xpin));
  // print a tab between values:
  Serial.print(“\\t”);
  Serial.print(analogRead(ypin));
  // print a tab between values:
  Serial.print(“\\t”);
  Serial.print(analogRead(zpin));
  Serial.println();
 
  // delay before next reading:
  delay(100);
}
          `}/>
        </div>
      </BlogSingle>
    );
  }
}
