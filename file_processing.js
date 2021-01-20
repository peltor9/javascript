package file_processing;
import java.io.*;
import java.util.*;

public class file_processing {

	public static void main(String[] args) 
			throws FileNotFoundException {	
			
		System.out.println("Welcome to file processing");
		//Scanner console = new Scanner(System.in);
		//System.out.print("Enter the file name: ");
		//String FileName = console.nextLine();
		
		Scanner input = new Scanner(new File("test.txt"));                  // text file that needs to be tested
		
		//String text = input.next();
		//System.out.println(text);
		
		double sum = 0.0;
		//for(int i=0;i<5;i++) {    //FOR loop
		
		while (input.hasNext())  {  // While loop  JAVA walks along the file until all are used
			if(input.hasNextDouble()) {  // If a number, count.
			double next = input.nextDouble();
			System.out.println(" number: "+next);
			sum = sum+next;
			}else { // if a string, let me know
				System.out.println("Its a string "+input.next());
			}
			
		}
		System.out.print("Sum of people is " +sum);
		
	}
