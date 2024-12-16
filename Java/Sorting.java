public class Sorting {
  public static void printArray(int arr[]) {
    for (int i = 0; i < arr.length; i++) {
      System.out.print(arr[i] + " ");
    }
    System.out.println();
  }

  // bubble sort
  // public static void main(String[] args) {

  // int arr[] = { 7, 4, 6, 8, 0, 2 };

  // for (int i = 0; i < arr.length - 1; i++) {
  // for (int j = 0; j < arr.length - i - 1; j++) {
  // if (arr[j] > arr[j + 1]) {
  // int temp = arr[j];

  // // swap
  // arr[j] = arr[j + 1];
  // arr[j + 1] = temp;
  // }
  // }
  // }

  // System.out.println("this is bubble sorting array " + arr);
  // printArray(arr);
  // }

  // selection sort
  // public static void main(String[] args) {
  // int arr[] = { 7, 4, 6, 8, 0, 2 };

  // for (int i = 0; i < arr.length - 1; i++) {
  // int smallest = i;
  // for (int j = i+1; j < arr.length; j++) {
  // if (arr[j] < arr[smallest]) {
  // smallest = j;
  // }
  // }

  // int temp = arr[i];
  // arr[i] = arr[smallest];
  // arr[smallest] = temp;
  // }

  // printArray(arr);
  // }

  // // insertion sort
  // public static void main(String[] args) {
  // int arr[] = { 7, 4, 6, 8, 0, 2 };

  // for (int i = 1; i < arr.length; i++) {
  // int current = arr[i];
  // int j = i - 1;

  // while (j >= 0 && arr[j] > current) {
  // // keep swapping
  // arr[j + 1] = arr[j];
  // j--;
  // }

  // arr[j + 1] = current;
  // }

  // printArray(arr);
  // }

  // counting sort
  public static void main(String[] args) {
    int arr[] = { 7, 4, 6, 8, 0, 2 };

    int largest = Integer.MIN_VALUE;

    for (int i = 0; i < arr.length; i++) {
      largest = Math.max(largest, arr[i]);

    }

    int count[] = new int[largest + 1];
    for (int i = 0; i < arr.length; i++) {
      count[arr[i]]++;
    }

    // sorting
    int j = 0;
    for (int i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        arr[j] = i;
        j++;
        count[i]--;

      }
    }

    printArray(arr);
  }

}