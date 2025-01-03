package Java_Assignments.java_01_first_java.java_09_Armstrong_Number;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter starting number: ");
        int start=sc.nextInt();
        System.out.print("Enter ending number: ");
        int end=sc.nextInt();
        System.out.print("The Armstrong Numbers between provide range is: ");
        for (int i=start;i<=end;i++){
            if (armstrong(i)){
                System.out.print(i+", ");
            }
        }
    }
    public static boolean armstrong(int number){
        int original=number;
        int length=0;
        while (number>0){
            number/=10;
            length++;
        };
        number=original;
        int sum=1;
        int ans=0;
        while (number>0){
            int digit=number%10;
            for (int i=0;i<length;i++){
                sum*=digit;
            }
            ans+=sum;
            sum=1;
            number/=10;
        }
        return ans == original;
    }
}
