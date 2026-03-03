from django.db import models
from filer.fields.image import FilerImageField

class Slide(models.Model):    
    title = models.CharField(
        'Название', 
        max_length=200,
    )
    image = FilerImageField(
        verbose_name='Изображение',
        on_delete=models.CASCADE,
        related_name='slides',
        null=True,
        blank=False,
        help_text='Загрузите изображение для слайда'
    )
    order = models.PositiveIntegerField(
        'Порядок',
        default=0,
        blank=False,
        null=False,
        db_index=True
    )
    
    class Meta:
        verbose_name = 'Слайд'
        verbose_name_plural = 'Слайды'
        ordering = ['order']
    
    def __str__(self):
        return self.title