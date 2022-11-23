interface student
{
	rollno:number;
	name:string;
	totalmarks:number;
	classname:string;		
}

const people: student[]=[{1,"nitin",400,"4Th std"},
{2,"nitin",340,"4Th std"},
{3,"nitin",550,"4Th std"},{4,"nitin",390,"4Th std"},{5,"nitin",320,"4Th std"}
{6,"nitin",300,"4Th std"}];

const sortBytotalmarks =(people:student[])=>
people.sort((personA:person, personB:person))=>
{
	if(personA.totalmarks > personB.totalmarks) return 1;
	if(personA.totalmarks > personB.totalmarks) return 0;
	return 0;
})

const sortedBytotalmarks = sortBytotalmarks(people);
console.log(sortedBytotalmarks);