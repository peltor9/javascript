import java.util.Scanner;


public class Numbers {

	public static void main(String[] args) {
		
		Scanner info = new Scanner(System.in);
		
		
		System.out.print("Please choose the case number: \n 1)Check your GPA for award \n 2)Check if the number is odd \n 3)Check your income level \n 4)Check if the nemuber is divisible by 2,3 or 5 \n ENTER A NUMBER :");
		int number4 = info.nextInt();
		switch (number4) {
		case 1:
		gpa(info);
		break;
		case 2:
			evenOdd(info);
		break;
		case 3:
			whatClass(info);
		break;
		case 4:
			divide();		
		break; }
		
		int number = info.nextInt();
	}
public static void gpa(Scanner info) {
		
		System.out.print("Enter your GPA: ");
		double grade1 = info.nextDouble();
		
		if(grade1 >= 3.8) {
			System.out.print("You are on the dean's list");
		}
		else if(grade1 >= 3.5) {
			System.out.print("You are on the honor's list");
		}
		else {
			System.out.print("Sorry your GPA is too low");
		}
	}
	
	public static void evenOdd(Scanner info) {
		System.out.print("Enter a number: ");
		int number = info.nextInt();
		
		if(number % 2 == 0) {
			System.out.print("Even number");
		}
		else {
			System.out.print("Odd number");
		}
	}
	
	public static void whatClass(Scanner info) {
		
		System.out.print("Enter your salary: ");
		int salary = info.nextInt();
		
		if( salary >= 10000) {
			System.out.print("You are in the Upper Class");
		}
		else if(salary >= 5000) {
			System.out.print("You are Middle class");
		}
		else {
			System.out.print("You are lower class");
		}
	}
	
	public static void divide() {
		for(int i=1; i<=10000;i++) {
			if((i % 2 ==0) && ( i % 3 ==0) && (i % 5 ==0)) {
				System.out.print(i);
			}
		}
	}
}
