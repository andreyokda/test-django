from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
from django.utils.html import format_html
from .models import Slide

@admin.register(Slide)
class SlideAdmin(SortableAdminMixin, admin.ModelAdmin):
    
    list_display = ['title', 'image_preview', 'order']
    list_display_links = ['title']
    search_fields = ['title']
    
    def image_preview(self, obj):
        if obj.image and obj.image.url:
            return format_html(
                '<img src="{}" style="max-height: 50px; max-width: 50px; border-radius: 4px;" />',
                obj.image.url
            )
        return "—"
    
    image_preview.short_description = 'Превью'
    
    fieldsets = (
        ('Информация о слайде', {
            'fields': ('title', 'image'),
            'description': 'Заполните информацию для слайда'
        }),
    )