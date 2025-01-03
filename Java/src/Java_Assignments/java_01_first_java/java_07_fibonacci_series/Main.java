package Java_Assignments.java_01_first_java.java_07_fibonacci_series;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number up-to which you want to see fibonacci series: ");
        int n=sc.nextInt();
        int first=0;
        int second=1;
        System.out.print(first+", "+second+", ");
        for (int i=3;i<=n;i++){
            int third=first+second;
            System.out.print(third+", ");
            first=second;
            second=third;
        }
    }
}
