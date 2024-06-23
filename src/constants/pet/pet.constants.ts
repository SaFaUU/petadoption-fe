// model Pet {
//     id                   String            @id() @default(uuid())
//     name                 String
//     species              String
//     breed                String
//     age                  Int
//     size                 String
//     location             String
//     description          String
//     temperament          String
//     medicalHistory       String
//     adoptionRequirements String
//     gender               Gender
//     healthStatus         HealthStatus      @default(EXCELLENT)
//     imageUrl             String?
//     createdAt            DateTime          @default(now())
//     updatedAt            DateTime          @updatedAt
//     adoptionRequest      AdoptionRequest[]

//     @@map("pets")
//   }

// enum HealthStatus {
//     EXCELLENT
//     VERY_GOOD
//     GOOD
//     FAIR
//     POOR
//   }

export type Pet = {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  size: string;
  location: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
  gender: "MALE" | "FEMALE";
  healthStatus: "EXCELLENT" | "VERY_GOOD" | "GOOD" | "FAIR" | "POOR";
  imageUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  adoptionRequest: any[];
};
