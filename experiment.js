var myvel=0.5,myacc=5,dis,tm1=0,tm2=0,vel="Initial Velocity",acc="Acceleration",dist="Distance",t1="Time1",t2="Time2";
var newval,newvel;
function inivel(newval)
{
    myvel=newval;
    PIEchangeDisplayText(vel, myvel);
     var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(360,240-myvel);
    var tt;
     if(myacc>0)tt=(240-myvel)/myacc;
    if(myacc<0 && myvel>0)tt=-myvel/myacc;
    if(myacc<0 && myvel<0)tt=(-240-myvel)/myacc;
ctx.lineTo(360+tt,240-(myvel+tt*myacc));
ctx.stroke();
}
function accel(newval)
{
    myacc=newval;
    PIEchangeDisplayText(acc, myacc);
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(360,240-myvel);
    var tt;
    if(myacc>0)tt=(240-myvel)/myacc;
    if(myacc<0 && myvel>0)tt=-myvel/myacc;
    if(myacc<0 && myvel<0)tt=(-240-myvel)/myacc;
    ctx.lineTo(360+tt,240-(myvel+tt*myacc));
    ctx.stroke();
}
function dist(newval)
{
    dis=newval;
    PIEchangeDisplayText(dist,dis);
}
function time1(newval)
{
    tm1=newval;
    PIEchangeDisplayText(t1,tm);
}
function time2(newval)
{
    tm2=newval;
    PIEchangeDisplayText(t1,tm);
}
function initialiseScene()
{
}
function initialiseControls()
{
    PIEaddInputSlider(vel,0.5, inivel, -100, 100, 1);
    PIEaddInputSlider(acc, 5, accel,-50,50,1);
    PIEaddInputSlider(dist,0,dist,0,100000,1);
    PIEaddInputSlider(t1,0,time1,0,100,1);
    PIEaddInputSlider(t2,0,time2,0,100,1);
    /* Create Display Panel */
    PIEaddDisplayText(vel, 0.5);
    PIEaddDisplayText(acc, 5);
    PIEaddDisplayText(dist,0);
    PIEaddDisplayText(t1,0);
    PIEaddDisplayText(t2,0);    
}
function loadExperimentElements()
{
    var fileName = location.href.split("/").slice(-1); 
    if(fileName=='index.jsp')window.location.href="mypage.html";
    PIEsetDeveloperName("Ayush Tripathi");
    PIEsetExperimentTitle("Velocity time graph for constant acceleration");
    helpContent="<h1>Help Section<h1>";
    helpContent=helpContent+"<h2>Velocity Time graph with constant acceleration Experiment</h2><h3>About the experiment</h3><p>The experiment shows the velocity time graph for a given initial velocity and acceleration</p><h3>Animation control</h3><p>The top line has animation controls. There are two states of the experiment.</p><h3>The setup stage</h3><p>The initial state is setup stage. In this stage, you can see a control window at the right. You have access to four sliders.</p><p>You can control the following:</p><ul><li>Initial Velocity&nbsp;&nbsp;:&nbsp;Provides the initial velocity for the graph</li><li>Acceleration&nbsp;&nbsp;:&nbsp;Provides the acceleration for the graph</li><li>Distance&nbsp;:&nbsp;Displays the distance covered between time interval t1 and t2</li><li>Time1&nbsp;:&nbsp;Provides the time t1 from where distance is to be calculated</li><li>Time2&nbsp;:&nbsp;Provides the time t2 till where distance is to be calculated.</li></ul><p>There is a car which travels along a straight line as per the distance in the time interval t1 to t2</p><p>The graph canvas in the center is the velocity time graph for the given velocity and acceleration</p><p>Once you setup the experiment, you can enter the animation stage by clicking the start button</p><h3>The animation stage</h3><p>In the animation stage, the distance is computed and the car moves slowly from its initial position to its final position at time t2</p><p>The distance travelled between t1 and t2 is displayed on the slider Text labelled Distance</p><ul><li>Initial Velocity&nbsp;&nbsp;:Shows the initial velocity &nbsp;</li><li>Acceleration&nbsp;&nbsp;:Shows the acceleration&nbsp;</li><li>Time1&nbsp;:Time from which the distance has been calculated&nbsp;</li><li>Time2&nbsp;:Time till which the value has been calculated&nbsp;</li></ul><p>You have to refresh the page to reset the experiment.</p><p>The controls can be hidden by clicking on close controls for unhindered view.</p><h2>Happy Experimenting</h2>"
    infoSection="<h1>Info Section</h1>"+"<h2>Velocity Time graph with constant acceleration Experiment</h2><h3>About the experiment</h3><p>The experiment shows a velocity time graph and a car. The graph is drawn as per the given initial velocity and uniform acceleration.</p><h3>Distance Calculation</h3><p>An object in uniform accelerated motion follows three equations of motion. Using the second equation of motion its displacement can be calculated at any given time.</p><p>First the displacement till t1 is calculated using the equation.</p><p>Then from the displacement till time t2 is found out using the same equation. The difference between the two displacements is the net displacement for the given motion.</p><p>The particle has been assumed to be moving in one dimensional on.</p><h3>The Second Equation of Motion</h3><p>A particle starting its motion with an initial velocity U and acceleration A will cover a distance which can be found by the area under the velocity time curve.</p><p>The displacement upto time t from the graph can be expressed as a sum of a rectangle's area and a triangle's area.</p><h3>S=u*t+0.5*a*t*t</h3><h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
    PIEupdateInfo(infoSection);
    initialiseControls();
    initialiseScene();  
        var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(360,0);
ctx.lineTo(360,480);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,240);
ctx.lineTo(720,240);
ctx.stroke();
    
    initialiseOtherVariables();
}
function resetExperiment()
{
      initialiseScene();
}
function updateExperimentElements(t,dt)
{
    
var s1=myvel*tm1+0.5*myacc*tm1*tm1;
var s2=myvel*tm2+0.5*myacc*tm2*tm2;
    PIEchangeDisplayText(dist,s2-s1);;
    if(s1<0)s1=-s1;   
    if(s1>1700)s1=1500;
    if(s2<0)s2=-s2;    
    if(s2>1700)s2=1500;
    s2=s2+"px";
    s1=s1+"px";
    document.getElementById("car").style.marginLeft=s2; 
    document.getElementById("car").innerHTML="<style>@keyframes example {0%   {margin-left:0px;} 50%  {margin-left:s1;}100% {margin-left:s2;}}#car {animation-name: example;animation-duration: 4s;}</style>";
}