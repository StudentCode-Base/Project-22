class rope{
	constructor(body1,body2,pointA,pointB)
	{

		this.pointA=pointA
		this.pointB=pointB
	//create rope constraint here
	var options={
		bodyA:body1,
		bodyB:body2,
		pointB:{x:this.pointA,y:this.pointB}
	}

	}
rope1=new rope(bob1,roof,-80,0)
rope2=new rope(bob1,roof,-80,0)
rope3=new rope(bob1,roof,-80,0)
rope4=new rope(bob1,roof,-80,0)
rope5=new rope(bob1,roof,-80,0)
rope6=new rope(bob1,roof,-80,0)


    //create display() here 
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;
}
