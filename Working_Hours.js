import java.util.Scanner;

public class work_hours {

	public static void main(String[] args) {
		
			int n,sum1=0, days, sum2=0;
			        
			        Scanner data=new Scanner(System.in);

			System.out.println("Employee 1: How many days?");
			         days=data.nextInt();
			         int a[]=new int[days]; 
			         
			         for(int i=0;i<days;i++)
			         {      
			       System.out.println("Hours?:");
			                 a[i]=data.nextInt();  }
			         		         for(int i=0;i<days;i++)  {  sum1+=a[i];	}  	    
			         System.out.println("Employee 1's total paid hours = "+sum1);
			}

	}
