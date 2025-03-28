from django.core.management.base import BaseCommand
from diagnostics.models import ImagingData
from datetime import datetime

class Command(BaseCommand):
    help = "Populate initial imaging data in the database"

    def handle(self, *args, **kwargs):
        ImagingData.objects.bulk_create([
            ImagingData(
                tumor_size=2.3,
                biopsy_result="Benign tumor",
                imaging_date=datetime(2023, 6, 15),
                notes="Routine check-up"
            ),
            ImagingData(
                tumor_size=3.1,
                biopsy_result="Malignant tumor",
                imaging_date=datetime(2024, 1, 20),
                notes="Requires immediate attention"
            ),
            ImagingData(
                tumor_size=1.8,
                biopsy_result="Benign tumor",
                imaging_date=datetime(2023, 11, 5),
                notes="Follow-up in 6 months"
            )
        ])
        self.stdout.write(self.style.SUCCESS("Successfully added initial imaging data."))
